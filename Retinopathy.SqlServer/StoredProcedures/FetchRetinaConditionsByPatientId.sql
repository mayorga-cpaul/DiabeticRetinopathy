CREATE PROCEDURE [dbo].[FetchRetinaConditionsByPatientId]
	@PatientId BIGINT
AS
	SELECT
	  DC.RetinaConditionFindingsId,
	  U.UserId AS [PatientId],
	  RE.NurseId,
	  RE.RetinopathyExamId,
	  U.UserName,
	  U.Cedula,
	  U.Email,
	  U.Phone, 
	  RE.ImageSource, 
	  RE.ModifiedDate AS [ModifiedDateExam], 
	  RE.CreatedDate AS [CreatedDateExam],
	  DC.CreatedDate AS [CreatedDateRetinaConditions],
	  DC.Moderate,
	  DC.Mild,
	  DC.Proliferative,
	  DC.NoDiabeticRetinopathy,
	  DC.Severe,
	  DC.AIAnalysis
	FROM [dbo].[User] AS U 
	INNER JOIN [dbo].[RetinopathyExam] AS RE
	ON U.UserId = RE.PatientId
	INNER JOIN [dbo].[RetinaConditionsFindings] AS DC
	ON RE.RetinopathyExamId = DC.RetinopathyExamId
	WHERE U.UserId = @PatientId
