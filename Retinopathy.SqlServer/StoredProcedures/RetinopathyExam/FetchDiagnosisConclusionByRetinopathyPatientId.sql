CREATE PROCEDURE [dbo].[FetchDiagnosisConclusionByRetinopathyPatientId]
	@PatientId BIGINT
AS
	SELECT RE.PatientId, RC.* FROM [dbo].[RetinopathyExam] AS RE INNER JOIN 
	[dbo].[DiagnosisConclusion] AS RC ON RE.RetinopathyExamId = RC.RetinopathyExamId
	WHERE RE.PatientId = @PatientId
RETURN 0