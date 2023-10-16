CREATE PROCEDURE [dbo].[InsertRetinopathyExam]
    @RetinopathyExamId BIGINT OUTPUT,
	@PatientId             BIGINT,
    @DoctorId              BIGINT,
	@ImageSource           NVARCHAR(MAX),
	@Mild                  FLOAT,      
    @NoDiabeticRetinopathy FLOAT,
    @Severe                FLOAT,
    @Moderate              FLOAT,
    @Proliferative         FLOAT,
    @AIAnalysis            NVARCHAR(MAX)
AS BEGIN
 SET NOCOUNT ON;
    BEGIN TRANSACTION;

    INSERT INTO [dbo].[RetinopathyExam] ([PatientId], [ImageSource])
    VALUES (@PatientId, @ImageSource)

    SET @RetinopathyExamId = SCOPE_IDENTITY();

    INSERT INTO [dbo].[RetinaConditionsFindings] 
    ([RetinopathyExamId], [Mild], [NoDiabeticRetinopathy], [Severe], [Moderate], [Proliferative], [AIAnalysis])
    VALUES
    (@RetinopathyExamId, @Mild, @NoDiabeticRetinopathy, @Severe, @Moderate, @Proliferative, @AIAnalysis)

    INSERT INTO [dbo].[DiagnosisConclusion]([RetinopathyExamId], [DoctorId]) VALUES(@RetinopathyExamId, @DoctorId);
    COMMIT TRANSACTION;
END
GO