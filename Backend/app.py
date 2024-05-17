from flask import Flask, request, jsonify,make_response
from flask_cors import CORS,cross_origin
import pickle
import json
import pandas as pd
import librosa
import soundfile as sf
import numpy as np

app = Flask(__name__)

model=pickle.load(open('ml_model.pkl','rb'))

@app.route('/',methods=['GET'])

def Hello():
    
    print("Helloworld")
    return 'hello'


filenames=[]
def split_audio(file_path, segment_length=3, format='wav'):
    # Load the audio file with librosa
    audio, sr = librosa.load(file_path, sr=None)

    # Calculate the number of samples per segment
    samples_per_segment = int(segment_length * sr)

    # Total number of samples in the file
    total_samples = len(audio)

    # Calculate the number of segments
    num_segments = int(total_samples / samples_per_segment)
    # Process each segment
    for i in range(num_segments):
        start_sample = i * samples_per_segment
        end_sample = start_sample + samples_per_segment
        segment = audio[start_sample:end_sample]

        # Save each segment to a file
        out_filename = f"output_segment_{i+1}.{format}"
        
        filenames.append(out_filename)

        sf.write(out_filename, segment, sr, format=format)
        print(f"Exported {out_filename}")



@app.route('/predict',methods=['POST','GET'])
@cross_origin()
def predict():

    print(request.files)
    file = request.files['file']
    split_audio(file)

    features1={}
    for filename in filenames:
        audio, sample_rate = librosa.load(filename, res_type='kaiser_fast', sr=None)
        mfccs = np.mean(librosa.feature.mfcc(y=audio, sr=sample_rate, n_mfcc=13).T,axis=0)
        features1[filename] = mfccs
    df1_features = pd.DataFrame.from_dict(features1)
    df1_features = df1_features.transpose()

    print(df1_features)
    prediction=model.predict(df1_features)
    print(prediction,type(prediction))
    
    return jsonify({'prediction':prediction.tolist()})


cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

if __name__ == '__main__':

    app.run(debug=True)