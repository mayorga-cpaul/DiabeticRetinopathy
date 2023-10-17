namespace Retinopathy.Api.Services;

using Retinopathy.Api.Attributes;
using Retinopathy.Api.Helpers;
using Retinopathy.Api.Interfaces;
using Retinopathy.Api.Stores;
using Retinopathy.Api.ViewModels.Patient;
using Retinopathy.DataTransferObject.Commons;
using Retinopathy.DataTransferObject.Fetchs;
using Retinopathy.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

[Service<IRetinaServices>]
public class RetinaServices(
    IStore<RetinopathyExam> RetinopathyExamStore, 
    IStore<DiagnosisConclusion> DiagnosisConclusíonStore, 
    IStore<RetinaConditionFindings> RetinaConditionsStore) 
    : IRetinaServices
{
    private readonly IStore<RetinopathyExam> RetinopathyExamStore = RetinopathyExamStore;
    private readonly IStore<DiagnosisConclusion> DiagnosisConclusíonStore = DiagnosisConclusíonStore;
    private readonly IStore<RetinaConditionFindings> RetinaConditionsStore = RetinaConditionsStore;

    public IAsyncEnumerable<FetchHistoryPatientAssignedToDoctor> FetchHistoryPatientAssignedToDoctorAsync(long PatientId, long DoctorId)
    {
        return RetinopathyExamStore.FetchHistoryPatientAssignedToDoctorAsync(PatientId, DoctorId);
    }

    public IAsyncEnumerable<FetchRetinaConditionsByPatientId> FetchRetinaConditionsByPatientIdAsync(long PatientId)
    {
        return RetinaConditionsStore.FetchRetinaConditionsByPatientIdAsync(PatientId);
    }

    public async Task<(EntityId, string)> InsertPatientAsync(InsertPatientRequest Request)
    {
        return await RetinopathyExamStore.InsertPatientAsync(Request);
    }

    public async Task<EntityId> InsertRetinopathyExamWhenExistPatientAsync(InsertRetinopathyExamWhenExistPatientRequest Request)
    {
        return await RetinopathyExamStore.InsertRetinopathyExamWhenExistPatientAsync(Request);
    }

    public async Task UpdateDiagnosisConclusionAsync(UpdateDiagnosisConclusionRequest Request)
    {
        await DiagnosisConclusíonStore.UpdateDiagnosisConclusionAsync(Request);
    }
}
