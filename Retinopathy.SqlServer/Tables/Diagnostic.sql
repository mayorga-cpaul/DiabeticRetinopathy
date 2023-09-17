CREATE TABLE [dbo].[Diagnostic]
(
	[DiagnosticId]        BIGINT        NOT NULL PRIMARY KEY IDENTITY,
	[DoctorId]	          BIGINT        NULL,
	[NurseId]	          BIGINT        NOT NULL,
	[RetinopathyResultId] BIGINT		NOT NULL,
	[PatientId]			  BIGINT        NOT NULL,
	[PatientStatus]       NVARCHAR(200),
	[Observations]        NVARCHAR(200),
    [CreatedDate]         DATETIME2     NOT NULL DEFAULT CURRENT_TIMESTAMP, 
    [ModifiedDate]        DATETIME2     NULL, 
    [DeletedDate]         DATETIME2     NULL, 
    [IsEdit]              BIT           NOT NULL DEFAULT 0, 
    [IsDelete]            BIT           NOT NULL DEFAULT 0,
	CONSTRAINT [FK_PatientDiagnostic_Patient_PatientId] FOREIGN KEY([PatientId]) REFERENCES [Patient]([PatientId]),
	CONSTRAINT [FK_Diagnostic_Retinopathy_Id] FOREIGN KEY([RetinopathyResultId]) REFERENCES [RetinopathyResult]([RetinopathyResultId]),
	CONSTRAINT [FK_NurseDiagnostic_Diagnostic_NurseId] FOREIGN KEY([NurseId]) REFERENCES [Nurse]([NurseId]),
	CONSTRAINT [FK_DoctorDiagnostic_Diagnostic_DoctorId] FOREIGN KEY([DoctorId]) REFERENCES [Doctor]([DoctorId])
)
GO

