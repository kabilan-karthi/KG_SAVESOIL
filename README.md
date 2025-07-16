“Real-time #KGsaveSoil tracker with an efficient tweet wall to amplify the movement!”

About

The KG Save Soil Dashboard is a Flask web app that acts as a real-time Twitter hashtag tracker and tweet wall for the #KGsaveSoil campaign.
It displays a live count of tweets using the hashtag and features an efficient, attractive tweet wall to showcase posts in real time. 
The dashboard also includes a countdown timer to encourage timely action, a QR code for easy social sharing, and educational sections to explain the importance of saving soil. 
It’s designed to boost participation, awareness, and community engagement for soil conservation efforts.

Excellent! Here’s a **complete, clear, professional-style “Installation” section** you can copy into your README.md for your Flask project.

You can tweak it to match your environment (Windows / Mac / Linux), but this version is *cross-platform friendly* with all common options.

---

## ✅ 📦 Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/kabilan-karthi/KG_SAVESOIL.git
```

---

### 2️⃣ (Optional but recommended) Create a virtual environment

**On macOS/Linux:**

```bash
python3 -m venv venv
source venv/bin/activate
```

**On Windows (CMD):**

```cmd
python -m venv venv
venv\Scripts\activate
```

**On Windows (PowerShell):**

```powershell
python -m venv venv
.\venv\Scripts\Activate.ps1
```

---

### 3️⃣ Install dependencies

```bash
pip install Flask
```

---

### 4️⃣ Run the Flask app

**Option A (standard Python command):**

```bash
python app.py
```

**Option B (Flask CLI):**

First set your app:

* macOS/Linux:

  ```bash
  export FLASK_APP=app.py
  ```
* Windows CMD:

  ```cmd
  set FLASK_APP=app.py
  ```
* Windows PowerShell:

  ```powershell
  $env:FLASK_APP = "app.py"
  ```

Then run:

```bash
flask run
```

By default it will run at [http://127.0.0.1:5000](http://127.0.0.1:5000).

---

### ✅ Example `requirements.txt`

You can add this to your project:

```
Flask>=2.0
```

---

### ✅ Directory Example

```
project/
│
├── app.py
├── templates/
│   └── dashboard.html
└── static/
    ├── savesoil-style.css
    ├── savesoil-script.js
    └── qr.jpg
```


