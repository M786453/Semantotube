import requests

response = requests.post("http://127.0.0.1:5000", data= {
  "video_url" : "https://www.youtube.com/watch?v=lhFU5H5KPFE&t=684s",
  "query" : "how she look like"
  })

print(response.text)