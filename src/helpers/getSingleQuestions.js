import AxiosRequest from '../helpers/AxiosRequests';

export function getData(id, handleChangeState) {
    //  console.log(match.params.slug);
    //  console.log(id);
    //  const path = `/singlequestion/${id}`;
    //  console.log(path)
    //  axios.get(`http://localhost/MyApplicationMentor/${path}`)
    //      .then(function (response) {
    //          // handle success
    //          console.log(response);
    //          //   setResponse(response.data.findallquestions)
    //          if (response.status === 200) {
    //              handleChangeState(response.data);
    //          }

    //      })
    //      .catch(function (error) {
    //          // handle error
    //          console.log(error);
    //      })
    //      .finally(function () {
    //          // always executed
    //      });
    const path = `/singlequestion/${id}`;
    // console.log(process.env.REACT_APP_API_HOST_URL);
    
    (async function () {
        const response = await AxiosRequest().get(`${process.env.REACT_APP_API_HOST_URL}/${path}`);
        console.log(response);
          if (response.status === 200) {
             handleChangeState(response.data);
            }
      })();
 }