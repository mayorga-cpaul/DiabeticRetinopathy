CREATE TABLE [dbo].[DiagnosisConclusion]
(
  [DianosticConclusionId] BIGINT IDENTITY          NOT NULL PRIMARY KEY,
  [DoctorId]              BIGINT                   NOT NULL,
  [RetinopathyExamId]     BIGINT                   NOT NULL,
  [RiskFactors]           NVARCHAR(MAX) DEFAULT 'Waiting for doctor diagnosis' NOT NULL,
  [DiagnosisAndFindings]  NVARCHAR(MAX) DEFAULT 'Waiting for doctor diagnosis' NOT NULL,
  [TreatmentPlan]         NVARCHAR(MAX) DEFAULT 'Waiting for doctor diagnosis' NOT NULL,
  [AdditionalInformation] NVARCHAR(MAX) DEFAULT 'Waiting for doctor diagnosis' NOT NULL,
  [CreatedDate]           DATETIME2                NOT NULL DEFAULT CURRENT_TIMESTAMP, 
  [ModifiedDate]          DATETIME2                NULL, 
  [DeletedDate]           DATETIME2                NULL, 
  [IsEdit]                BIT                      NOT NULL DEFAULT 0, 
  [IsDelete]              BIT                      NOT NULL DEFAULT 0,
  CONSTRAINT [FK_Diagnosis_Retina] FOREIGN KEY ([RetinopathyExamId]) REFERENCES [RetinopathyExam]([RetinopathyExamId]),
);

