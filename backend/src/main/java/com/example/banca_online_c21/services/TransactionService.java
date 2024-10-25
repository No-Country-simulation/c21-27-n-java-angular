package com.example.banca_online_c21.services;

import com.example.banca_online_c21.entities.TransactionEntity;
import com.example.banca_online_c21.repositories.TransactionRepository;
import com.lowagie.text.*;
import com.lowagie.text.pdf.PdfWriter;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class TransactionService implements ITransactionService {

    private final TransactionRepository repository;

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

        //var transaction = this.repository.findByOperationNumber(operationNumber).orElseThrow();
        Paragraph p1 = new Paragraph("Comprobante de Transferencia", fontTitle);
        p1.setAlignment(Paragraph.ALIGN_CENTER);
        document.add(p1);

        Paragraph p2 = new Paragraph("Numero de operación: ");
        p2.setAlignment(Paragraph.ALIGN_LEFT);
        p2.add("123456845");
        document.add(p2);

        Paragraph p3 = new Paragraph("Cuenta de origen: ");
        p3.setAlignment(Paragraph.ALIGN_LEFT);
        p3.add("454ALE34");
        document.add(p3);

        Paragraph p4 = new Paragraph("Cuenta de destino: ");
        p4.setAlignment(Paragraph.ALIGN_LEFT);
        p4.add("XXXXXXX");
        document.add(p4);

        Paragraph p5 = new Paragraph("Titular: ");
        p5.setAlignment(Paragraph.ALIGN_LEFT);
        p5.add("John Doe");
        document.add(p5);

        Paragraph p6 = new Paragraph("Importe debitado: ");
        p6.setAlignment(Paragraph.ALIGN_LEFT);
        p6.add("$15000");
        document.add(p6);

        Paragraph p7 = new Paragraph("Fecha: ");
        p7.setAlignment(Paragraph.ALIGN_LEFT);
        p7.add("22/10/2024");
        document.add(p7);

        document.close();
    }
}
