// ─────────────────────────────────────────────────────────────
//  All site content lives here. Edit this file to update the site.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Atush Iskenderow',
  shortName: 'Atush',
  title: 'Full-stack & AI Engineer',
  siteUrl: 'https://jumabay2101.vercel.app',
  resume: 'https://drive.google.com/file/d/14I2vJBYJ0Mq2_nFgemEGWpj1hlqHfPA6/view?usp=sharing',
  location: 'Turkmenistan · Open to remote',
  availability: 'Open to full-time, contract & freelance work',
  roles: [
    'Backend Engineer',
    'AI / LLM Engineer',
    'RAG Systems Builder',
    'Vue & Nuxt Developer',
    'Flutter Developer',
    'DevOps · Docker & Nginx',
  ],
  intro:
    'I build fast, reliable backends with Django and FastAPI, put AI models — LLMs, RAG, speech and vision — into real products, and ship the whole thing: Vue/Nuxt web apps, Flutter mobile apps and Dockerized deployments behind Nginx.',
  about: [
    'I’m a <b>Python-first software engineer</b> focused on backend systems and applied AI. Most of my work starts with an API — data models, auth, background jobs and integrations in <b>Django</b> or <b>FastAPI</b> — and ends with that API powering a real interface.',
    'On the AI side I go beyond calling an API: I <b>fine-tune</b> and <b>quantize</b> open models so they run cheaply on your own hardware, build <b>RAG systems</b> that answer from your documents, and ship <b>speech-to-text</b>, <b>text-to-speech</b> and <b>image classification</b> as production endpoints.',
    'Because I also build <b>Vue/Nuxt</b> frontends, <b>Flutter</b> apps and handle <b>Docker + Nginx/Apache</b> deployment, I can take a product from idea to a live URL without hand-offs.',
  ],
  stats: [
    { value: '5', label: 'Layers of the stack I own: AI · API · Web · Mobile · Infra' },
    { value: '7+', label: 'AI capabilities: LLM, RAG, NLP, STT, TTS, Vision, Fine-tuning' },
    { value: '2', label: 'Backend frameworks: Django & FastAPI' },
    { value: '1', label: 'Person to talk to — end-to-end ownership' },
  ],
  contact: {
    email: 'atabekiskander@gmail.com',
    phone: '+99364834681',
    phoneDisplay: '+993 64 83 46 81',
    github: 'https://github.com/Jumabay2101',
    githubUser: 'Jumabay2101',
    instagram: 'https://instagram.com/atushiskenderow',
    instagramUser: '@atushiskenderow',
    // linkedin: 'https://linkedin.com/in/your-name',
    // telegram: 'https://t.me/your-name',
  },
}

export type SkillGroup = {
  id: string
  title: string
  blurb: string
  icon: 'brain' | 'server' | 'monitor' | 'phone' | 'box'
  points: string[]
  tags: string[]
  featured?: boolean
}

export const skills: SkillGroup[] = [
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    blurb: 'From research notebooks to optimized models served behind an API.',
    icon: 'brain',
    featured: true,
    points: [
      '<b>LLMs & RAG</b> — assistants grounded in your own documents with embeddings and vector search',
      '<b>Fine-tuning</b> — adapting open-source models (LoRA / QLoRA) to your domain',
      '<b>Quantization</b> — 4/8-bit, GGUF, AWQ to run fast on modest GPUs or CPU',
      '<b>Speech</b> — speech-to-text transcription and natural text-to-speech',
      '<b>Computer vision</b> — image classification: data, training, inference',
      '<b>NLP</b> — classification, extraction, summarization, semantic search',
    ],
    tags: ['PyTorch', 'Transformers', 'PEFT', 'LangChain', 'Whisper', 'llama.cpp', 'vLLM', 'TensorFlow', 'OpenCV', 'scikit-learn', 'Vector DBs'],
  },
  {
    id: 'backend',
    title: 'Backend',
    blurb: 'Clean, documented APIs that scale.',
    icon: 'server',
    points: [
      'REST APIs with Django REST Framework & FastAPI',
      'Auth, permissions, admin panels, payments',
      'Async tasks, queues, caching, WebSockets',
    ],
    tags: ['Python', 'Django', 'DRF', 'FastAPI', 'PostgreSQL', 'Redis', 'Celery', 'RabbitMQ'],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    blurb: 'Fast, SEO-friendly interfaces.',
    icon: 'monitor',
    points: [
      'SPAs with Vue 3 and SSR / static sites with Nuxt',
      'Dashboards and admin tools for AI products',
      'Responsive UI — this site is built with Nuxt',
    ],
    tags: ['Vue.js', 'Nuxt.js', 'TypeScript', 'Pinia', 'Vuetify', 'SASS'],
  },
  {
    id: 'mobile',
    title: 'Mobile',
    blurb: 'One codebase for Android and iOS.',
    icon: 'phone',
    points: [
      'Cross-platform apps with Flutter',
      'API integration, auth, offline storage',
      'On-device or cloud AI features',
    ],
    tags: ['Flutter', 'Dart', 'Firebase'],
  },
  {
    id: 'devops',
    title: 'DevOps & Deployment',
    blurb: 'From git push to a secure live server.',
    icon: 'box',
    points: [
      'Docker & Docker Compose multi-service setups',
      'Nginx / Apache reverse proxy, SSL, static & media',
      'Linux servers and GPU hosts for model serving',
    ],
    tags: ['Docker', 'Nginx', 'Apache', 'Linux', 'Bash', 'Git', 'CI/CD'],
  },
]

// Interactive "AI Lab" section — each capability shows a pipeline + code sample.
export const aiLab = [
  {
    id: 'rag',
    label: 'RAG',
    title: 'Retrieval-Augmented Generation',
    desc: 'Chat with your documents. Files are chunked, embedded and stored in a vector DB; each question retrieves the most relevant passages so the LLM answers with sources — not hallucinations.',
    pipeline: ['Documents', 'Chunk + Embed', 'Vector DB', 'Retrieve top-k', 'LLM answer + sources'],
    code: `@app.post("/ask")
async def ask(q: Question):
    hits = await vectordb.search(embed(q.text), k=5)
    context = "\\n\\n".join(h.text for h in hits)
    answer = await llm.generate(PROMPT.format(context, q.text))
    return {"answer": answer, "sources": [h.source for h in hits]}`,
  },
  {
    id: 'finetune',
    label: 'Fine-tune',
    title: 'LLM Fine-tuning (LoRA / QLoRA)',
    desc: 'Teach an open model your domain, tone or output format. Parameter-efficient training keeps it affordable on a single GPU.',
    pipeline: ['Raw data', 'Clean + format', 'LoRA training', 'Evaluate', 'Merge + deploy'],
    code: `model = AutoModelForCausalLM.from_pretrained(BASE, load_in_4bit=True)
model = get_peft_model(model, LoraConfig(r=16, lora_alpha=32,
                       target_modules=["q_proj", "v_proj"]))
trainer = SFTTrainer(model=model, train_dataset=ds,
                     args=TrainingArguments(num_train_epochs=3, ...))
trainer.train()`,
  },
  {
    id: 'quant',
    label: 'Quantize',
    title: 'Model Quantization',
    desc: 'Shrink models 2–4× with 4/8-bit quantization (GGUF, AWQ, bitsandbytes) to cut GPU cost and latency with minimal quality loss.',
    pipeline: ['FP16 model', 'Calibrate', '4-bit / 8-bit', 'Benchmark', 'Serve (llama.cpp / vLLM)'],
    code: `# 14 GB fp16  →  ~4 GB q4_K_M
python convert_hf_to_gguf.py ./model --outtype f16
./llama-quantize model-f16.gguf model-q4_K_M.gguf Q4_K_M
./llama-server -m model-q4_K_M.gguf --port 8080 -ngl 99`,
  },
  {
    id: 'stt',
    label: 'Speech → Text',
    title: 'Speech-to-Text',
    desc: 'Accurate transcription of calls, meetings and voice notes with timestamps — served as an async API that handles long audio.',
    pipeline: ['Audio upload', 'Resample + VAD', 'Whisper model', 'Timestamps', 'Text / SRT'],
    code: `@app.post("/transcribe")
async def transcribe(file: UploadFile):
    audio = load_audio(await file.read(), sr=16_000)
    segments, info = whisper.transcribe(audio, vad_filter=True)
    return {"language": info.language,
            "segments": [{"start": s.start, "text": s.text} for s in segments]}`,
  },
  {
    id: 'tts',
    label: 'Text → Speech',
    title: 'Text-to-Speech',
    desc: 'Natural-sounding voice generation for assistants, accessibility and content — streamed back to web or mobile clients.',
    pipeline: ['Text', 'Normalize', 'TTS model', 'Vocoder', 'Streamed audio'],
    code: `@app.post("/speak")
async def speak(req: SpeakRequest):
    wav = tts.synthesize(normalize(req.text), voice=req.voice)
    return StreamingResponse(to_mp3(wav), media_type="audio/mpeg")`,
  },
  {
    id: 'vision',
    label: 'Vision',
    title: 'Image Classification',
    desc: 'Custom image classifiers via transfer learning — from dataset preparation to a fast inference endpoint for web and mobile.',
    pipeline: ['Images', 'Augment', 'Transfer learning', 'Validate', 'REST endpoint'],
    code: `model = timm.create_model("efficientnet_b0", pretrained=True,
                          num_classes=len(CLASSES))
# ... train ...
@app.post("/classify")
async def classify(img: UploadFile):
    probs = model(preprocess(img)).softmax(-1)[0]
    return {"label": CLASSES[probs.argmax()], "confidence": float(probs.max())}`,
  },
]

export const services = [
  { title: 'AI assistant over your documents', desc: 'A RAG chatbot that answers from your PDFs, wiki or database — with sources, access control and an admin panel.' },
  { title: 'Self-hosted LLM', desc: 'Fine-tune an open model on your data, quantize it and serve it on your own GPU — private, with predictable cost.' },
  { title: 'Voice features', desc: 'Transcription of calls and meetings, voice commands, or natural voice generation with STT and TTS.' },
  { title: 'Image recognition service', desc: 'Train a classifier on your images and expose it as a fast REST endpoint for web or mobile.' },
  { title: 'Web platform / SaaS backend', desc: 'Django or FastAPI backend with a Vue/Nuxt frontend — auth, dashboards, payments, notifications.' },
  { title: 'Mobile app + deployment', desc: 'Flutter app connected to your API, plus Docker/Nginx production deployment with SSL.' },
]

export const workflow = [
  { title: 'Understand', desc: 'We define the problem, the users and what “done” looks like.' },
  { title: 'Design', desc: 'I propose the architecture, data model and the right AI approach.' },
  { title: 'Build', desc: 'Short iterations with demos, clean code and documentation.' },
  { title: 'Ship', desc: 'Dockerized deployment behind Nginx, handover and support.' },
]

// ─────────────────────────────────────────────────────────────
//  PROJECTS — add your real work here. The section stays hidden
//  until this list has at least one item. Example:
//
//  {
//    title: 'DocChat — RAG assistant',
//    desc: 'Chat with company PDFs. FastAPI + pgvector + Llama 3 (4-bit).',
//    tags: ['FastAPI', 'RAG', 'pgvector', 'Nuxt'],
//    github: 'https://github.com/Jumabay2101/docchat',
//    live: 'https://docchat.vercel.app',
//    image: '/projects/docchat.png',   // put the file in /public/projects/
//  },
// ─────────────────────────────────────────────────────────────
export type Project = {
  title: string
  desc: string
  tags: string[]
  github?: string
  live?: string
  image?: string
}

export const projects: Project[] = []
