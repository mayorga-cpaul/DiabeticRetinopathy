CREATE PROCEDURE [dbo].[UpdateDiagnosisConclusion]
(
  @DoctorId BIGINT,
  @RetinopathyExamId BIGINT,
  @RiskFactors NVARCHAR(MAX) = '',
  @DiagnosisAndFindings NVARCHAR(MAX) = '',
  @TreatmentPlan NVARCHAR(MAX) = '',
  @AdditionalInformation NVARCHAR(MAX) = ''
)
AS
BEGIN
  UPDATE [dbo].[DiagnosisConclusion]
  SET
    [RiskFactors] = @RiskFactors,
    [DiagnosisAndFindings] = @DiagnosisAndFindings,
    [TreatmentPlan] = @TreatmentPlan,
    [AdditionalInformation] = @AdditionalInformation,
    [ModifiedDate] = CURRENT_TIMESTAMP
  WHERE [DoctorId] = @DoctorId AND [RetinopathyExamId] = @RetinopathyExamId
END
