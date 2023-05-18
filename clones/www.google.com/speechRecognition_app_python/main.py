import pyttsx3
import speech_recognition


def GetText(filename: str):
    text = None
    with open(filename, 'r') as file:
        text = file.read()
    return text


def Speak(text: str) -> None:
    engine = pyttsx3.init()
    engine.say(text)
    engine.runAndWait()


def Recognise():
    r = speech_recognition.Recognizer()

    with speech_recognition.Microphone() as source:
        print("Listening...")
        r.pause_threshold = 1
        audio = r.listen(source)

    try:
        print("Recognizing...")
        query = r.recognize_google(audio, language='en-in')
        print(f"[+] User said: {query}\n")
        return query

    except Exception as e:
        print("[-] Unable to Recognize your voice.")
        print(e)
        return None


text = GetText("myFile.txt")
Speak(text) 
print(text)
query = Recognise()
