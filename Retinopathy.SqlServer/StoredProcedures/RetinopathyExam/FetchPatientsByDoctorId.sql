CREATE PROCEDURE [dbo].[FetchPatientsByDoctorId]
    @DoctorId BIGINT
AS
	SELECT U.* FROM  [dbo].[User] AS U
	INNER JOIN [dbo].[RetinopathyExam] AS RE
	ON U.UserId = RE.PatientId 
	INNER JOIN [dbo].[DiagnosisConclusion] AS DC
	ON RE.RetinopathyExamId = DC.RetinopathyExamId
	WHERE  DC.DoctorId = @DoctorId