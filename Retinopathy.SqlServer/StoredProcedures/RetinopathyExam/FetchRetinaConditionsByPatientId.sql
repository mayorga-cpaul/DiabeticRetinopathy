CREATE PROCEDURE [dbo].[FetchRetinaConditionsByPatientId]
	@PatientId BIGINT
AS
	SELECT RE.PatientId, RC.* FROM [dbo].[RetinopathyExam] AS RE INNER JOIN 
	[dbo].[RetinaConditionsFindings] AS RC ON RE.RetinopathyExamId = RC.RetinopathyExamId
	WHERE RE.PatientId = @PatientId
RETURN 0
