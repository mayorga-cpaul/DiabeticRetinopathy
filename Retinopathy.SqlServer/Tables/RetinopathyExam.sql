﻿CREATE TABLE [dbo].[RetinopathyExam]
(
  [RetinopathyExamId]  BIGINT        NOT NULL PRIMARY KEY IDENTITY,
  [PatientId]          BIGINT        NOT NULL UNIQUE,
  [NurseId]            BIGINT        NOT NULL,
  [ImageSource]        NVARCHAR(MAX) NOT NULL,
  [CreatedDate]        DATETIME2     NOT NULL DEFAULT CURRENT_TIMESTAMP, 
  [ModifiedDate]       DATETIME2     NULL, 
  [DeletedDate]        DATETIME2     NULL, 
  [IsEdit]             BIT           NOT NULL DEFAULT 0, 
  [IsDelete]           BIT           NOT NULL DEFAULT 0,
)
