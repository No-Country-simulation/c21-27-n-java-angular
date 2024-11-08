package com.example.banca_online_c21.services;


import com.example.banca_online_c21.dtos.requests.TransferRequest;
import com.example.banca_online_c21.entities.Account;
import com.example.banca_online_c21.entities.TransactionEntity;
import com.example.banca_online_c21.repositories.AccountRepository;
import com.example.banca_online_c21.repositories.TransactionRepository;
import com.lowagie.text.*;
import com.lowagie.text.pdf.PdfWriter;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import javax.security.auth.login.AccountNotFoundException;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class TransactionService implements ITransactionService {

    private final TransactionRepository repository;

    private final AccountRepository accountRepository;

    private static final String ACCOUNT_NUMBER_PATTERN = "^[JAOB][0-9]{4}[JAOB][0-9]{4}[JAOB][0-9]{4}[JAOB]$";


    @Override
    public List<TransactionEntity> findByAccountNumber(String accountNumber) {
        return repository.findBySourceAccount_AccountNumber(accountNumber);
    }

    @Override
    public List<TransactionEntity> getAll() {
        return repository.findAll();
    }

    @Override
    public TransactionEntity findById(Long id) {
        var fromDB = repository.findById(id).orElseThrow();
        return fromDB;
    }


    @Override
    public void delete(Long id) {
        var fromDB = repository.findById(id).orElseThrow();
        this.repository.delete(fromDB);
    }

    @Override
    public void generatePdf(UUID operationNumber, HttpServletResponse response) throws IOException {

        Document document = new Document(PageSize.A5);
        PdfWriter.getInstance(document, response.getOutputStream());
        document.open();

        Font fontTitle = FontFactory.getFont(FontFactory.TIMES_ROMAN);
        fontTitle.setSize(20);

        var transaction = this.repository.findByOperationNumber(operationNumber).orElseThrow();
        Paragraph p1 = new Paragraph("Comprobante de Transferencia", fontTitle);
        p1.setAlignment(Paragraph.ALIGN_CENTER);
        document.add(p1);

        Paragraph p2 = new Paragraph("Numero de operación: ");
        p2.setAlignment(Paragraph.ALIGN_LEFT);
        p2.add(transaction.getOperationNumber().toString());
        document.add(p2);

        Paragraph p3 = new Paragraph("Cuenta de origen: ");
        p3.setAlignment(Paragraph.ALIGN_LEFT);
        p3.add(transaction.getSourceAccount().getAccountNumber());
        document.add(p3);

        Paragraph p4 = new Paragraph("Cuenta de destino: ");
        p4.setAlignment(Paragraph.ALIGN_LEFT);
        p4.add(transaction.getDestinationAccount().getAccountNumber());
        document.add(p4);

        Paragraph p5 = new Paragraph("Titular: ");
        p5.setAlignment(Paragraph.ALIGN_LEFT);
        p5.add(transaction.getDestinationAccount().getUser().getUsername());
        document.add(p5);

        Paragraph p6 = new Paragraph("Importe debitado: ");
        p6.setAlignment(Paragraph.ALIGN_LEFT);
        p6.add(transaction.getAmount().toString());
        document.add(p6);

        Paragraph p7 = new Paragraph("Fecha: ");
        p7.setAlignment(Paragraph.ALIGN_LEFT);
        p7.add(transaction.getDate().toString());
        document.add(p7);

        document.close();
    }

    @Transactional
    @Override
    public void transferFunds(TransferRequest transferRequest) throws AccountNotFoundException {

        // Validar formato del número de cuenta de origen
        if (!transferRequest.getSourceAccount().matches(ACCOUNT_NUMBER_PATTERN)) {
            throw new IllegalArgumentException("El número de cuenta de origen tiene un formato incorrecto.");
        }

        // Validar formato del número de cuenta de destino
        if (!transferRequest.getDestinationAccount().matches(ACCOUNT_NUMBER_PATTERN)) {
            throw new IllegalArgumentException("El número de cuenta de destino tiene un formato incorrecto.");
        }

        // Verificar que el monto sea positivo
        if (transferRequest.getAmount() == null || transferRequest.getAmount() <= 0) {
            throw new IllegalArgumentException("El monto debe ser mayor a 0.");
        }
        // Validar que la cuenta de origen exista
        Account sourceAccount = accountRepository.findByAccountNumber(transferRequest.getSourceAccount())
                .orElseThrow(() -> new AccountNotFoundException("Cuenta de origen no encontrada."));

        // Validar que la cuenta de destino exista
        Account destinationAccount = accountRepository.findByAccountNumber(transferRequest.getDestinationAccount())
                .orElseThrow(() -> new AccountNotFoundException("Cuenta destino no encontrada."));

        // Validar que la cuenta de origen tenga suficientes fondos
        if (sourceAccount.getBalance() < transferRequest.getAmount()) {
            throw new RuntimeException("Fondos insuficientes en la cuenta de origen.");
        }

        // Procesar la transferencia
        sourceAccount.setBalance(sourceAccount.getBalance() - transferRequest.getAmount());
        destinationAccount.setBalance(destinationAccount.getBalance() + transferRequest.getAmount());

        // Guardar las cuentas actualizadas
        accountRepository.save(sourceAccount);
        accountRepository.save(destinationAccount);

        // Registrar la transacción
        TransactionEntity transaction = TransactionEntity.builder()
                .sourceAccount(sourceAccount)
                .destinationAccount(destinationAccount)
                .amount(transferRequest.getAmount())
                .description(transferRequest.getDescription())
                //.operationNumber(UUID.randomUUID())
                //.date(LocalDateTime.now())
                .build();

        repository.save(transaction);
    }
}
