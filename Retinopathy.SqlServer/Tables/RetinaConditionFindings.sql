CREATE TABLE [dbo].[RetinaConditionsFindings]
(
  [RetinaConditionFindingsId] BIGINT IDENTITY          NOT NULL PRIMARY KEY,
  [RetinopathyExamId]         BIGINT                   NOT NULL,
  [Mild]                      FLOAT                    NOT NULL,
  [NoDiabeticRetinopathy]     FLOAT                    NOT NULL,
  [Severe]                    FLOAT                    NOT NULL,
  [Moderate]                  FLOAT                    NOT NULL,
  [Proliferative]             FLOAT                    NOT NULL,
  [AIAnalysis]                NVARCHAR(MAX) DEFAULT '' NOT NULL,
  [CreatedDate]               DATETIME2                NOT NULL DEFAULT CURRENT_TIMESTAMP, 
  [ModifiedDate]              DATETIME2                NULL, 
  [DeletedDate]               DATETIME2                NULL, 
  [IsEdit]                    BIT                      NOT NULL DEFAULT 0, 
  [IsDelete]                  BIT                      NOT NULL DEFAULT 0,
  CONSTRAINT [FK_RetinaConditions_Retina] FOREIGN KEY ([RetinopathyExamId]) REFERENCES [RetinopathyExam]([RetinopathyExamId]), 
)