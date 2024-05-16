import pandas as pd
df = pd.read_csv("./sep28k-mfcc.csv")

# %%
df = df[df['NoStutteredWords'] != 0]
df = df[df['NaturalPause'] == 0]
df = df[df['Interjection'] == 0]
df = df[df['Prolongation'] == 0]
df = df[df['WordRep'] == 0]
df = df[df['Block'] == 0]
df
# df=df.sort_values(by='Show')
# df.head()

# %%
df.loc[df['SoundRep'] >= 1.0, 'SoundRep'] = 1.0
df['SoundRep'].value_counts()

# %%
X = df.iloc[: , -13:]
X

# %%
y = df['SoundRep']
y

# %%
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test =  train_test_split(X, y, test_size=0.4, random_state=42)

# %%
from collections import Counter
Counter(y_train)

# %%
from sklearn.tree import DecisionTreeClassifier
import numpy as np
clf = DecisionTreeClassifier(criterion='entropy',random_state=5)
clf.fit(X_train, y_train)
clf.score(X_test,y_test) * 100

# %%
y_pred = np.array(clf.predict(X_test))
y_actual = np.array(y_test)
X_test.head()
print(Counter(y_pred))
print(Counter(y_actual))


# %%
import librosa
import soundfile as sf

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

# Usage
split_audio("C:/Users/ns5085/Downloads/stutter-classification-main/output8.wav")
print(filenames)


# %%
import numpy as np
import pandas as pd
features1={}
# filenames={"output_segment_1.wav","output_segment_2.wav","output_segment_3.wav","output_segment_4.wav","output_segment_5.wav","output_segment_6.wav"}
for filename in filenames:
    audio, sample_rate = librosa.load(filename, res_type='kaiser_fast', sr=None)
    mfccs = np.mean(librosa.feature.mfcc(y=audio, sr=sample_rate, n_mfcc=13).T,axis=0)
    features1[filename] = mfccs
# features1["HeStutters_0_27.wav"]
df1_features = pd.DataFrame.from_dict(features1)
df1_features = df1_features.transpose()
df1_features
y1_pred = np.array(clf.predict(df1_features))
print(y1_pred)
print(Counter(y1_pred))