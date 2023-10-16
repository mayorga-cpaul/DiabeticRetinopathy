CREATE PROCEDURE UpdateDiagnosisConclusion
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
    [AdditionalInformation] = @AdditionalInformation
  WHERE [DoctorId] = @DoctorId AND [RetinopathyExamId] = @RetinopathyExamId
END
