import axios from "axios";


async function cMeeting()
{
    let data = JSON.stringify({
      "topic": "Sesionprueba2",
      "type": 2,
      "start_time": "2023-10-22T12:10:10Z",
      "duration": "3",
      "settings": {
        "host_video": true,
        "participant_video": true,
        "join_before_host": true,
        "mute_upon_entry": "true",
        "watermark": "true",
        "audio": "voip",
        "auto_recording": "cloud"
      }
    });
    
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://api.zoom.us/v2/users/me/meetings\n',
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': 'Bearer eyJzdiI6IjAwMDAwMSIsImFsZyI6IkhTNTEyIiwidiI6IjIuMCIsImtpZCI6IjE3ZWM3YmQ4LTI1YTctNGE2OS05NDgzLTQyODJjYTIxODQxYiJ9.eyJ2ZXIiOjksImF1aWQiOiJhZWI4NjRkZWI2NmY5YWU1NDI0YzkyMzU5OGE3MDc2NSIsImNvZGUiOiJnczFhUk9aTUw0dlM5WFpMOVp3UWNLT3dzWjUycTdSdlEiLCJpc3MiOiJ6bTpjaWQ6QlU0dHdBNjdUR2VEZ1VwakZLa0pxUSIsImdubyI6MCwidHlwZSI6MCwidGlkIjowLCJhdWQiOiJodHRwczovL29hdXRoLnpvb20udXMiLCJ1aWQiOiI3SExXTU9GVVFQS0hTeGtZVTNaaEVBIiwibmJmIjoxNjk3ODg0MDAyLCJleHAiOjE2OTc4ODc2MDIsImlhdCI6MTY5Nzg4NDAwMiwiYWlkIjoiVjZUaUQtdHlRZ09mNTBudHF2dXZsdyJ9.Lun3HYDDT5Gk2cXT5LhcmMDB5X_MZ3LH3Xq3EtmEfmUQhPQMysUqp1XwALAvctuiXMHs_OuiiGAIE3uRoXbnyA', 
        'Cookie': '__cf_bm=a0XdbIdADXFJIxjYdLSrcxelt4mp3ZXmElld3cnirI4-1697883872-0-Ackhon/pORzAic+u2wIGw2Ma2fiQiX/KGkpwAa1JlfP20rAKh5lqg3/gaqFJ7/fY+xlTZI9oC5u+38N2BpCgzrY=; _zm_cms_guid=MJ9KKU_9rc8ihhbnENDuLHw6oS-9O9xrUedu3Up3wavLE0vYK-itBV4e39tBf_Xc6-d74kXvRjZ7VGIZjhZiF734CilzM-E.hHcZz540a-tqHikc; _zm_mtk_guid=a806d0dfe0d04948bba5a789ccba1702; _zm_page_auth=us04_c_UJXpfCU-S3ulZ5nUR4YaVQ; _zm_ssid=us04_c_UjR4eAh4TU6dBJdIv2uPjg; cred=300A240582654517A5D6CECEFDEF59AA'
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
    
    
}

async function gMeeting()
{
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://api.zoom.us/v2/meetings/74040821263\n',
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': 'Bearer eyJzdiI6IjAwMDAwMSIsImFsZyI6IkhTNTEyIiwidiI6IjIuMCIsImtpZCI6ImM3YmE0YjZmLTQxNDAtNDgzNy1hMmNjLWJhOWE2ODQyNzAxMCJ9.eyJ2ZXIiOjksImF1aWQiOiJhZWI4NjRkZWI2NmY5YWU1NDI0YzkyMzU5OGE3MDc2NSIsImNvZGUiOiJEak4xMGdRVXRnZkJfbkdTdk9YVGxLckppeU1IenduNUEiLCJpc3MiOiJ6bTpjaWQ6QlU0dHdBNjdUR2VEZ1VwakZLa0pxUSIsImdubyI6MCwidHlwZSI6MCwidGlkIjoxLCJhdWQiOiJodHRwczovL29hdXRoLnpvb20udXMiLCJ1aWQiOiI3SExXTU9GVVFQS0hTeGtZVTNaaEVBIiwibmJmIjoxNjk3ODgxMjY3LCJleHAiOjE2OTc4ODQ4NjcsImlhdCI6MTY5Nzg4MTI2NywiYWlkIjoiVjZUaUQtdHlRZ09mNTBudHF2dXZsdyJ9.szXyEGMpfbEhBBKIUseuT5uvNDpz92DF8e--EwpdmCqg-2Nwu-nOZKaQJr5YUSQWdTmOkYzf-KtH5fwmB8VBJA', 
          'Cookie': '__cf_bm=dkoa8p.xFQRfkM0iGxizprIHxZGoEiErJptU7FkVn0w-1697881268-0-ARXNDN9QACCuSilGRTOUqr4hfsBRmeS1srCpKOvb1dzaypB4ST0w5+9yFKTWPTm24cxuNWUOti8zaW4pK3hKf/s=; _zm_cms_guid=MJ9KKU_9rc8ihhbnENDuLHw6oS-9O9xrUedu3Up3wavLE0vYK-itBV4e39tBf_Xc6-d74kXvRjZ7VGIZjhZiF734CilzM-E.hHcZz540a-tqHikc; _zm_mtk_guid=a806d0dfe0d04948bba5a789ccba1702; _zm_page_auth=us04_c_UJXpfCU-S3ulZ5nUR4YaVQ; _zm_ssid=us04_c_UjR4eAh4TU6dBJdIv2uPjg; cred=8630072A9F9159200A349EFB6CEDFA6A'
        },
        data : data
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    cMeeting
  };
  