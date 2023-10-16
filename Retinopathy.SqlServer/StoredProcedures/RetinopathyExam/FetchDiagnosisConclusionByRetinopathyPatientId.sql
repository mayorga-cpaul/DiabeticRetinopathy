CREATE PROCEDURE [dbo].[FetchDiagnosisConclusionByRetinopathyPatientId]
	@PatientId BIGINT
AS
	SELECT
	  DC.DianosticConclusionId,
	  U.UserId AS [PatientId],
	  DC.DoctorId,
	  RE.NurseId,
	  RE.RetinopathyExamId,
	  U.UserName,
	  U.Cedula,
	  U.Email,
	  U.Phone, 
	  RE.ImageSource, 
	  RE.ModifiedDate AS [ModifiedDateExam], 
	  RE.CreatedDate AS [CreatedDateExam],
	  DC.CreatedDate AS [CreatedDateDiagnosis],
	  DC.AdditionalInformation,
	  DC.DiagnosisAndFindings,
	  DC.RiskFactors,
	  DC.TreatmentPlan
	FROM [dbo].[User] AS U 
	INNER JOIN [dbo].[RetinopathyExam] AS RE
	ON U.UserId = RE.PatientId
	INNER JOIN [dbo].[DiagnosisConclusion] AS DC
	ON RE.RetinopathyExamId = DC.RetinopathyExamId
	WHERE U.UserId = @PatientId