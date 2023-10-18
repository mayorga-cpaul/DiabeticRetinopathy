CREATE PROCEDURE [dbo].[FetchPatientsAssignedToDoctor]
    @DoctorId BIGINT
AS
BEGIN 
  SELECT 
    RE.PatientId, 
    DC.DoctorId,
    RE.ImageSource, 
    RE.NurseId, 
    RE.RetinopathyExamId, 
    RE.CreatedDate,
    DC.CreatedDate AS [CreatedDateRetinaConditions],
    DC.DianosticConclusionId,
    DC.TreatmentPlan,
    DC.AdditionalInformation,
    DC.RiskFactors
  FROM [RetinopathyExam] AS RE
  INNER JOIN [DiagnosisConclusion] AS DC
  ON DC.RetinopathyExamId = RE.RetinopathyExamId
  WHERE DC.DoctorId = @DoctorId
END