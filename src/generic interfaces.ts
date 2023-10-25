{
  interface IResult<T> {
    data: T | null;
    error: string | null;
  }

  function fetchData<T>(url: string): IResult<T> {
    return {
      data: null,
      error: "no error",
    };
  }

  interface IUser {
    username: string;
  }
  interface IProducts {
    title: string;
  }

  const ans: IResult<IProducts> = fetchData<IProducts>("url");
  ans.data?.title;
}
