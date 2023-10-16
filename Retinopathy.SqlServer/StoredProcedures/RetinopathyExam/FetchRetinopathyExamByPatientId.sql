CREATE PROCEDURE [dbo].[FetchRetinopathyExamByPatientId]
	@PatientId BIGINT
AS
	SELECT 
	  RE.*, 
	  FR.Mild                      AS [MildIA], 
	  FR.NoDiabeticRetinopathy     AS [NoDiabeticRetinopathyIA], 
	  FR.Severe                    AS [SeverIA], 
	  FR.Moderate                  AS [ModerateIA], 
	  FR.Proliferative             AS [PloriferativeIA], 
	  FR.AIAnalysis                AS [AIAnalysis], 
	  FR.CreatedDate               AS [AnalysisIACreated], 
	  DC.RiskFactors               AS [RiskFactorsDoctor],
	  DC.DiagnosisAndFindings      AS [DiagnosisAndFindingsDoctor],
	  DC.TreatmentPlan             AS [TreatmentPlanDoctor],
	  DC.CreatedDate               AS [CreatedDateDiagnosisDoctor],
	  DC.ModifiedDate              AS [ModifiedDateDoctor]
	FROM [dbo].[RetinopathyExam] AS RE 
	INNER JOIN [dbo].[RetinaConditionsFindings] AS FR
	ON RE.RetinopathyExamId = FR.RetinopathyExamId
	INNER JOIN [dbo].[DiagnosisConclusion] AS DC
	ON RE.RetinopathyExamId = DC.RetinopathyExamId
	WHERE RE.PatientId = @PatientId
RETURN 0
