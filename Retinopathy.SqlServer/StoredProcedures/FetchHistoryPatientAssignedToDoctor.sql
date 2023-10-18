CREATE PROCEDURE [dbo].[FetchHistoryPatientAssignedToDoctor]
   @DoctorId  BIGINT,
   @PatientId BIGINT
AS BEGIN
  SELECT 
    U.UserId, u.UserName, U.Cedula, U.CreatedDate, U.Email, U.Phone,
    RE.RetinopathyExamId, RE.NurseId, 
    DC.DoctorId, DC.AdditionalInformation, DC.DiagnosisAndFindings, DC.DianosticConclusionId,
    DC.RiskFactors, DC.TreatmentPlan
  FROM [dbo].[User] AS U 
  INNER JOIN [dbo].[RetinopathyExam] AS RE
  ON U.UserId = RE.PatientId
  INNER JOIN [dbo].[DiagnosisConclusion] AS DC
  ON DC.RetinopathyExamId = RE.RetinopathyExamId
  WHERE DC.DoctorId = @DoctorId AND U.UserId = @PatientId
END