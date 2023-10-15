namespace Retinopathy.Api.Stores;

using Microsoft.Extensions.Options;
using Retinopathy.Api;
using Retinopathy.Model;
using System.Data.Common;

public interface IStore : IDisposable
{

    DbConnection Connection { get; }

    IStore<TModel> GetStore<TModel>() where TModel : Entity;

    void IDisposable.Dispose() => Connection?.Dispose();
}

public interface IStore<TModel> : IStore where TModel : Entity
{
}

public class Store<TModel>(IOptions<RetinopathyOptions> Options) : IStore<TModel> where TModel : Entity
{
    public DbConnection Connection { get; } = Options.Value.CreateConnection();

    public IStore<TEntity> GetStore<TEntity>() where TEntity : Entity
    {
        return new Store<TEntity>(Options);
    }
}
