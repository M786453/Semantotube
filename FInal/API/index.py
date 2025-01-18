from flask import Flask, request
import ast
from views import semantoTube
from flask_cors import cross_origin


app = Flask(__name__)

@app.route('/w')
@cross_origin()
def test():
    return {
  "video_url" : "https://www.youtube.com/watch?v=lhFU5H5KPFE&t=684s",
  "query" : "how she look like"
  }

@app.route('/', methods = ['POST'])
@cross_origin()
def index():
    try:
        request_data = request.data
        print(request_data)
        request_data_dict = ast.literal_eval(request_data.decode('utf-8'))
        query, video_url = request_data_dict["query"], request_data_dict["video_url"]
        if "=" in video_url:
            video_id = video_url.split("=")[1]
            if "&" in video_id:
                video_id = video_id.split("&")[0]
        else:
            video_id = video_url.split("/")[3]
        
        output = semantoTube(query, video_id)
    except Exception as e:
        return {"error" : str(e)}
        
    return output



if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)