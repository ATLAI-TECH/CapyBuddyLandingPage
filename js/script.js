// CapyBuddy landing — i18n + language switcher.
// Default: English. Languages: English, Français, Deutsch, 中文, Español, Русский.

(function () {
  'use strict';

  const STORAGE_KEY = 'macbuddy.lang';

  const LANGS = [
    { code: 'en', label: 'English',   short: 'EN' },
    { code: 'fr', label: 'Français',  short: 'FR' },
    { code: 'de', label: 'Deutsch',   short: 'DE' },
    { code: 'zh', label: '中文',      short: '中' },
    { code: 'es', label: 'Español',   short: 'ES' },
    { code: 'ru', label: 'Русский',   short: 'RU' },
  ];

  const DICT = {
    en: {
      'doc.title': 'CapyBuddy — Your friendly Mac companion',
      'sp.doc.title': 'Support — CapyBuddy',

      'nav.screenshots': 'Screenshots',
      'nav.features': 'Features',
      'nav.support': 'Support',
      'nav.github': 'GitHub',
      'nav.home': 'Home',
      'nav.lang_aria': 'Choose language',

      'hero.eyebrow': 'macOS · Menu-bar app',
      'hero.title': 'Your friendly<br/>Mac companion.',
      'hero.lede': "A whole toolkit of handy menu-bar tools, wrapped in one tidy app. Capture and translate screenshots, generate QR codes, keep your Mac awake, browse clipboard history, watch CPU + memory, convert pictures, and compress archives — all from a single buddy in your menu bar.",
      'hero.btn_download': 'Download CapyBuddy',
      'hero.btn_download_sub': 'No ads · Open source',
      'hero.btn_inside': "See what's inside →",
      'hero.meta': 'Open source. No accounts. No subscriptions.',

      'shots.heading': 'A peek inside',
      'shots.sub': 'Capture and translate, generate QR codes, browse clipboard history, and tune every tool from Settings.',
      'shots.cap1': 'Region capture → annotate → translate. Pick a target language and the captured text is rendered back in place.',
      'shots.cap2': 'Custom colours, dot &amp; eye shapes, and an embedded logo — copy or save as PNG.',
      'shots.cap3': 'Search the last <em>n</em> things you copied — text or images. Pin the ones you reuse.',
      'shots.cap4': 'Keep your Mac awake for 15 minutes, an hour, or indefinitely — pick a duration straight from the menu bar.',
      'shots.cap5': 'Everything lives in the menu bar — open any tool from one tidy dropdown.',
      'shots.cap6': 'Pick which tools show in the dropdown — hidden ones still run in the background.',
      'shots.cap7': 'Three hotkey styles to choose from — Snipaste, CleanShot X, or Shottr — to avoid conflicts.',
      'shots.cap8': 'Live CPU + memory in the menu bar, formatted your way.',

      'features.heading': 'A whole toolbox, one menu-bar app',
      'features.sub': "Each tool is independent — turn off the ones you don't need from Settings.",

      'feat.screenshot.title': 'Screenshot',
      'feat.screenshot.desc': 'Region capture with a global hotkey, then annotate, translate, copy, save, or pin the result.',
      'feat.keepawake.title': 'Keep Awake',
      'feat.keepawake.desc': 'Prevents your Mac from sleeping or dimming the display for a chosen duration.',
      'feat.clipboard.title': 'Clipboard',
      'feat.clipboard.desc': 'Keeps a searchable history of recent clipboard items, including images. Pin the ones you reuse.',
      'feat.monitor.title': 'System Monitor',
      'feat.monitor.desc': 'Adds a menu-bar status item showing live CPU, memory, and other system stats.',
      'feat.picture.title': 'Picture Converter',
      'feat.picture.desc': 'Drag-and-drop converter between PNG, JPEG, HEIC, TIFF, GIF, AVIF, ICO, BMP, ICNS, JP2.',
      'feat.qr.title': 'QR Code',
      'feat.qr.desc': 'Generate scannable QR codes with custom colors, dot & eye shapes, and an embedded logo.',
      'feat.compressor.title': 'Compressor',
      'feat.compressor.desc': 'Compress or extract archives — zip, tar, tar.gz, gz — with a simple drag-and-drop window.',
      'feat.recording.title': 'Screen Recording',
      'feat.recording.desc': 'Record the full screen, a window, or a region to MP4/MOV — with optional system audio and mic.',
      'feat.videoeditor.title': 'Video Editor',
      'feat.videoeditor.desc': 'Trim, crop, speed up, or mute a clip right after recording — no extra app needed.',
      'feat.space.title': 'Space Shortcut',
      'feat.space.desc': 'Hold the Space bar and tap a key to instantly launch or focus your favourite apps.',
      'feat.vault.title': 'Password Vault',
      'feat.vault.desc': 'A fully encrypted password manager in your menu bar — standard KeePass (.kdbx) format, Touch ID unlock, iCloud sync.',
      'feat.auth.title': '2FA Codes',
      'feat.auth.desc': 'Built-in authenticator: two-factor codes live right next to their passwords — one click to copy.',
      'feat.pro_badge': 'PRO',

      'ob.skip': 'Skip',
      'ob.back': 'Back',
      'ob.next': 'Next',
      'ob.welcome.title': 'Welcome to CapyBuddy',
      'ob.welcome.sub': 'Your friendly menu-bar companion.',
      'ob.shot.title': 'Screenshot',
      'ob.shot.sub': 'Capture, annotate & translate — ⌃1.',
      'ob.rec.title': 'Screen Recording',
      'ob.rec.sub': 'Record screen or window to video — ⌃2.',
      'ob.space.title': 'Space Shortcut',
      'ob.space.sub': 'Hold Space to launch any app.',
      'ob.space.key': 'space',
      'ob.clip.sub': 'Search everything you’ve copied.',
      'ob.qr.sub': 'Styled, scannable QR codes.',
      'ob.awake.sub': 'Stop your Mac from sleeping.',
      'ob.mon.sub': 'Live CPU & memory in the menu bar.',

      'download.heading': 'Get CapyBuddy',
      'download.sub': 'Open source, no ads. Apple Silicon &amp; Intel.',
      'download.btn': 'Download latest release',
      'download.btn_sub': 'latest · .dmg',
      'download.view': 'View source on GitHub →',

      'nav.pricing': 'Pricing',
      'pricing.heading': 'Free, with an optional Pro unlock',
      'pricing.sub': 'The core tools are free forever. Unlock the power features once for £1.99 — no subscription.',
      'pricing.free.name': 'Free',
      'pricing.free.price': '£0',
      'pricing.free.tagline': 'The core menu-bar tools, forever.',
      'pricing.free.perk1': 'Screenshot, recording & 20+ toolbox tools',
      'pricing.free.perk2': 'No ads, no account',
      'pricing.free.perk3': 'Apple Silicon & Intel',
      'pricing.free.cta': 'Download free',
      'pricing.pro.name': 'Pro',
      'pricing.pro.price': '£1.99',
      'pricing.pro.price_note': 'one-time · no subscription',
      'pricing.pro.badge': 'Best value',
      'pricing.pro.tagline': 'Everything in Free, plus the power tools.',
      'pricing.pro.perk1': 'Encrypted password vault (KeePass format)',
      'pricing.pro.perk2': 'Built-in 2FA authenticator codes',
      'pricing.pro.perk3': 'Hold-Space app shortcuts',
      'pricing.pro.perk4': 'Global Toolbox hotkey (⌃3)',
      'pricing.pro.perk5': 'Activate on up to 3 Macs',
      'pricing.pro.cta': 'Get CapyBuddy Pro',
      'pricing.note': 'One-time payment, no subscription. Secure checkout & VAT handled by Lemon Squeezy.',

      'support.heading': 'Support &amp; feedback',
      'support.sub': "Found a bug? Want a new tool inside CapyBuddy? Tell us — issues land straight in the project's GitHub.",
      'support.bug.title': 'Report a bug',
      'support.bug.desc': "Something not working? Open a bug report — we'll be notified on GitHub.",
      'support.bug.cta': 'Open bug report →',
      'support.feature.title': 'Suggest a feature',
      'support.feature.desc': 'Got an idea for a new tool inside CapyBuddy? Pitch it.',
      'support.feature.cta': 'Suggest a feature →',
      'support.question.title': 'Ask a question',
      'support.question.desc': 'Stuck on permissions or hotkeys? Drop a question.',
      'support.question.cta': 'Ask a question →',
      'support.note': 'No GitHub account needed — your feedback goes straight to our issue tracker. Prefer email? <a href="mailto:dev@atlai.co.uk?subject=CapyBuddy%20feedback">dev@atlai.co.uk</a>.',

      'footer.fine': '© {year} ATLAI. Made with ❤️ on a Mac.',

      'sp.back': '← Back to CapyBuddy',
      'sp.heading': 'Support &amp; Feedback',
      'sp.sub': 'Found a bug? Want a new feature? Have a question? Submit it below — no GitHub account needed. Your report goes straight to our issue tracker.',
      'sp.tab.bug': 'Report a Bug',
      'sp.tab.feature': 'Suggest a Feature',
      'sp.tab.question': 'Ask a Question',
      'sp.form.title_label': 'Title',
      'sp.form.title_hint.bug': 'A short summary of the bug',
      'sp.form.title_hint.feature': 'A short name for the feature',
      'sp.form.title_hint.question': 'What is your question about?',
      'sp.form.title_ph.bug': 'e.g. Screenshot tool crashes on dual monitors',
      'sp.form.title_ph.feature': 'e.g. Dark mode support',
      'sp.form.title_ph.question': 'e.g. How do I change the screenshot hotkey?',
      'sp.form.desc_label.bug': 'Description',
      'sp.form.desc_label.feature': 'Feature Description',
      'sp.form.desc_label.question': 'Details',
      'sp.form.desc_hint.bug': 'Describe what happened and what you expected',
      'sp.form.desc_hint.feature': 'What would this feature do and why is it useful?',
      'sp.form.desc_hint.question': 'Provide context so we can help you',
      'sp.form.desc_ph.bug': 'Describe the issue in detail...',
      'sp.form.desc_ph.feature': "Describe the feature you'd like to see...",
      'sp.form.desc_ph.question': "Describe your question and what you've tried...",
      'sp.form.steps_label': 'Steps to Reproduce',
      'sp.form.steps_hint': 'How can we reproduce this bug?',
      'sp.form.steps_ph': '1. Open CapyBuddy\n2. Click on...\n3. ...',
      'sp.form.env_label': 'Environment',
      'sp.form.env_hint': 'macOS version, CapyBuddy version, Mac model',
      'sp.form.env_ph': 'e.g. macOS 15.1, CapyBuddy 1.2, MacBook Air M2',
      'sp.form.contact_label': 'Contact (optional)',
      'sp.form.contact_hint': "Email if you'd like us to follow up with you",
      'sp.form.contact_ph': 'you@example.com',
      'sp.form.submit.bug': 'Submit Report',
      'sp.form.submit.feature': 'Submit Suggestion',
      'sp.form.submit.question': 'Submit Question',
      'sp.form.submitting': 'Submitting...',
      'sp.form.success': 'Submitted successfully! Thank you for your feedback.',
      'sp.form.error_required': 'Please fill in the title and description.',
      'sp.form.error_network': 'Network error. Please check your connection and try again.',
      'sp.form.error_generic': 'Something went wrong. Please try again.',
    },

    fr: {
      'doc.title': 'CapyBuddy — Votre compagnon Mac amical',
      'sp.doc.title': 'Support — CapyBuddy',

      'nav.screenshots': 'Captures',
      'nav.features': 'Fonctionnalités',
      'nav.support': 'Support',
      'nav.github': 'GitHub',
      'nav.home': 'Accueil',
      'nav.lang_aria': 'Choisir la langue',

      'hero.eyebrow': 'macOS · App barre de menus',
      'hero.title': 'Votre compagnon<br/>Mac amical.',
      'hero.lede': "Toute une boîte à outils pour la barre de menus, dans une seule application. Capturez et traduisez des captures, générez des QR codes, gardez votre Mac éveillé, parcourez le presse-papiers, surveillez le CPU et la mémoire, convertissez des images et compressez des archives — le tout depuis un seul compagnon dans votre barre de menus.",
      'hero.btn_download': 'Télécharger CapyBuddy',
      'hero.btn_download_sub': 'Sans pub · Open source',
      'hero.btn_inside': 'Découvrir le contenu →',
      'hero.meta': "Open source. Pas de comptes. Pas d'abonnements.",

      'shots.heading': 'Un aperçu intérieur',
      'shots.sub': "Capturez et traduisez, générez des QR codes, parcourez l'historique du presse-papiers, et configurez chaque outil depuis les Paramètres.",
      'shots.cap1': 'Capture de zone → annoter → traduire. Choisissez une langue cible et le texte capturé est restitué à sa place.',
      'shots.cap2': "Couleurs personnalisées, formes de points et d'yeux, et un logo intégré — copiez ou enregistrez en PNG.",
      'shots.cap3': 'Recherchez les <em>n</em> derniers éléments copiés — texte ou images. Épinglez ceux que vous réutilisez.',
      'shots.cap4': 'Gardez votre Mac éveillé pendant 15 minutes, une heure ou indéfiniment — choisissez une durée depuis la barre de menus.',
      'shots.cap5': "Tout vit dans la barre de menus — ouvrez n'importe quel outil depuis un seul menu déroulant.",
      'shots.cap6': "Choisissez quels outils apparaissent dans le menu — les masqués continuent de tourner en arrière-plan.",
      'shots.cap7': 'Trois styles de raccourcis au choix — Snipaste, CleanShot X ou Shottr — pour éviter les conflits.',
      'shots.cap8': 'CPU et mémoire en direct dans la barre de menus, formatés à votre façon.',

      'features.heading': 'Toute une boîte à outils, une seule app',
      'features.sub': "Chaque outil est indépendant — désactivez ceux dont vous n'avez pas besoin depuis les Paramètres.",

      'feat.screenshot.title': "Capture d'écran",
      'feat.screenshot.desc': 'Capture de zone avec un raccourci global, puis annotez, traduisez, copiez, enregistrez ou épinglez le résultat.',
      'feat.keepawake.title': 'Garder éveillé',
      'feat.keepawake.desc': "Empêche votre Mac de se mettre en veille ou d'assombrir l'écran pendant une durée choisie.",
      'feat.clipboard.title': 'Presse-papiers',
      'feat.clipboard.desc': 'Conserve un historique consultable des éléments récents du presse-papiers, y compris les images. Épinglez ceux que vous réutilisez.',
      'feat.monitor.title': 'Moniteur système',
      'feat.monitor.desc': "Ajoute un élément à la barre de menus affichant le CPU, la mémoire et d'autres statistiques en direct.",
      'feat.picture.title': "Convertisseur d'images",
      'feat.picture.desc': 'Convertisseur glisser-déposer entre PNG, JPEG, HEIC, TIFF, GIF, AVIF, ICO, BMP, ICNS, JP2.',
      'feat.qr.title': 'Code QR',
      'feat.qr.desc': "Générez des QR codes scannables avec des couleurs personnalisées, des formes de points et d'yeux, et un logo intégré.",
      'feat.compressor.title': 'Compresseur',
      'feat.compressor.desc': 'Compressez ou extrayez des archives — zip, tar, tar.gz, gz — par simple glisser-déposer.',
      'feat.recording.title': "Enregistrement d'écran",
      'feat.recording.desc': "Enregistrez tout l'écran, une fenêtre ou une zone en MP4/MOV — avec audio système et micro en option.",
      'feat.videoeditor.title': 'Éditeur vidéo',
      'feat.videoeditor.desc': "Coupez, recadrez, accélérez ou coupez le son d'un clip juste après l'enregistrement — sans autre app.",
      'feat.space.title': 'Raccourci Espace',
      'feat.space.desc': "Maintenez la barre d'espace et appuyez sur une touche pour lancer ou activer vos apps favorites.",
      'feat.vault.title': 'Coffre de mots de passe',
      'feat.vault.desc': 'Un gestionnaire de mots de passe entièrement chiffré dans votre barre de menus — format standard KeePass (.kdbx), déverrouillage Touch ID, synchronisation iCloud.',
      'feat.auth.title': 'Codes 2FA',
      'feat.auth.desc': 'Authentificateur intégré : vos codes à deux facteurs vivent juste à côté de leurs mots de passe — un clic pour copier.',
      'feat.pro_badge': 'PRO',

      'ob.skip': 'Passer',
      'ob.back': 'Retour',
      'ob.next': 'Suivant',
      'ob.welcome.title': 'Bienvenue dans CapyBuddy',
      'ob.welcome.sub': 'Votre compagnon de barre de menus.',
      'ob.shot.title': "Capture d'écran",
      'ob.shot.sub': 'Capturez, annotez et traduisez — ⌃1.',
      'ob.rec.title': "Enregistrement d'écran",
      'ob.rec.sub': "Enregistrez l'écran ou une fenêtre — ⌃2.",
      'ob.space.title': 'Raccourci Espace',
      'ob.space.sub': 'Maintenez Espace pour lancer une app.',
      'ob.space.key': 'espace',
      'ob.clip.sub': 'Cherchez tout ce que vous avez copié.',
      'ob.qr.sub': 'Des QR codes stylés et scannables.',
      'ob.awake.sub': 'Empêchez votre Mac de dormir.',
      'ob.mon.sub': 'CPU et mémoire en direct dans la barre.',

      'download.heading': 'Obtenir CapyBuddy',
      'download.sub': 'Open source, sans pub. Apple Silicon et Intel.',
      'download.btn': 'Télécharger la dernière version',
      'download.btn_sub': 'dernière · .dmg',
      'download.view': 'Voir le code source sur GitHub →',

      'nav.pricing': 'Tarifs',
      'pricing.heading': 'Gratuit, avec une option Pro',
      'pricing.sub': 'Les outils essentiels sont gratuits pour toujours. Débloquez les fonctions avancées une seule fois pour 1,99 £ — sans abonnement.',
      'pricing.free.name': 'Gratuit',
      'pricing.free.tagline': 'Les outils essentiels de la barre de menus, pour toujours.',
      'pricing.free.perk1': "Capture, enregistrement et plus de 20 outils",
      'pricing.free.perk2': 'Sans pub, sans compte',
      'pricing.free.perk3': 'Apple Silicon et Intel',
      'pricing.free.cta': 'Télécharger gratuitement',
      'pricing.pro.name': 'Pro',
      'pricing.pro.price_note': 'paiement unique · sans abonnement',
      'pricing.pro.badge': 'Meilleur choix',
      'pricing.pro.tagline': 'Tout ce qui est gratuit, plus les outils avancés.',
      'pricing.pro.perk1': 'Coffre de mots de passe chiffré (format KeePass)',
      'pricing.pro.perk2': 'Codes 2FA intégrés',
      'pricing.pro.perk3': "Raccourcis d'apps avec Espace",
      'pricing.pro.perk4': 'Raccourci global de la boîte à outils (⌃3)',
      'pricing.pro.perk5': "Activation sur jusqu'à 3 Mac",
      'pricing.pro.cta': 'Obtenir CapyBuddy Pro',
      'pricing.note': 'Paiement unique, sans abonnement. Paiement sécurisé et TVA gérés par Lemon Squeezy.',

      'support.heading': 'Support et retours',
      'support.sub': 'Trouvé un bug ? Vous voulez un nouvel outil dans CapyBuddy ? Dites-le-nous — les tickets arrivent directement sur le GitHub du projet.',
      'support.bug.title': 'Signaler un bug',
      'support.bug.desc': 'Quelque chose ne fonctionne pas ? Ouvrez un rapport de bug — nous serons notifiés sur GitHub.',
      'support.bug.cta': 'Ouvrir un rapport →',
      'support.feature.title': 'Suggérer une fonctionnalité',
      'support.feature.desc': 'Une idée pour un nouvel outil dans CapyBuddy ? Proposez-la.',
      'support.feature.cta': 'Suggérer une fonctionnalité →',
      'support.question.title': 'Poser une question',
      'support.question.desc': 'Bloqué sur les permissions ou les raccourcis ? Posez une question.',
      'support.question.cta': 'Poser une question →',
      'support.note': "Pas besoin de compte GitHub — vos retours arrivent directement à notre suivi de tickets. Préférez l'e-mail ? <a href=\"mailto:dev@atlai.co.uk?subject=CapyBuddy%20feedback\">dev@atlai.co.uk</a>.",

      'footer.fine': '© {year} ATLAI. Fait avec ❤️ sur un Mac.',

      'sp.back': '← Retour à CapyBuddy',
      'sp.heading': 'Support et retours',
      'sp.sub': 'Trouvé un bug ? Vous voulez une nouvelle fonctionnalité ? Une question ? Soumettez-la ci-dessous — pas besoin de compte GitHub. Votre rapport va directement à notre suivi de tickets.',
      'sp.tab.bug': 'Signaler un bug',
      'sp.tab.feature': 'Suggérer une fonctionnalité',
      'sp.tab.question': 'Poser une question',
      'sp.form.title_label': 'Titre',
      'sp.form.title_hint.bug': 'Un bref résumé du bug',
      'sp.form.title_hint.feature': 'Un nom court pour la fonctionnalité',
      'sp.form.title_hint.question': 'De quoi parle votre question ?',
      'sp.form.title_ph.bug': "ex. La capture d'écran plante sur double écran",
      'sp.form.title_ph.feature': 'ex. Mode sombre',
      'sp.form.title_ph.question': 'ex. Comment changer le raccourci de capture ?',
      'sp.form.desc_label.bug': 'Description',
      'sp.form.desc_label.feature': 'Description de la fonctionnalité',
      'sp.form.desc_label.question': 'Détails',
      'sp.form.desc_hint.bug': "Décrivez ce qui s'est passé et ce que vous attendiez",
      'sp.form.desc_hint.feature': 'Que ferait cette fonctionnalité et pourquoi est-elle utile ?',
      'sp.form.desc_hint.question': "Donnez du contexte pour qu'on puisse vous aider",
      'sp.form.desc_ph.bug': 'Décrivez le problème en détail...',
      'sp.form.desc_ph.feature': 'Décrivez la fonctionnalité souhaitée...',
      'sp.form.desc_ph.question': 'Décrivez votre question et ce que vous avez essayé...',
      'sp.form.steps_label': 'Étapes pour reproduire',
      'sp.form.steps_hint': 'Comment pouvons-nous reproduire ce bug ?',
      'sp.form.steps_ph': '1. Ouvrir CapyBuddy\n2. Cliquer sur...\n3. ...',
      'sp.form.env_label': 'Environnement',
      'sp.form.env_hint': 'Version macOS, version CapyBuddy, modèle de Mac',
      'sp.form.env_ph': 'ex. macOS 15.1, CapyBuddy 1.2, MacBook Air M2',
      'sp.form.contact_label': 'Contact (facultatif)',
      'sp.form.contact_hint': "E-mail si vous souhaitez que l'on revienne vers vous",
      'sp.form.contact_ph': 'vous@exemple.com',
      'sp.form.submit.bug': 'Envoyer le rapport',
      'sp.form.submit.feature': 'Envoyer la suggestion',
      'sp.form.submit.question': 'Envoyer la question',
      'sp.form.submitting': 'Envoi en cours...',
      'sp.form.success': 'Envoyé avec succès ! Merci pour vos retours.',
      'sp.form.error_required': 'Veuillez remplir le titre et la description.',
      'sp.form.error_network': 'Erreur réseau. Vérifiez votre connexion et réessayez.',
      'sp.form.error_generic': 'Une erreur est survenue. Veuillez réessayer.',
    },

    de: {
      'doc.title': 'CapyBuddy — Dein freundlicher Mac-Begleiter',
      'sp.doc.title': 'Support — CapyBuddy',

      'nav.screenshots': 'Screenshots',
      'nav.features': 'Funktionen',
      'nav.support': 'Support',
      'nav.github': 'GitHub',
      'nav.home': 'Start',
      'nav.lang_aria': 'Sprache wählen',

      'hero.eyebrow': 'macOS · Menüleisten-App',
      'hero.title': 'Dein freundlicher<br/>Mac-Begleiter.',
      'hero.lede': 'Ein ganzes Toolkit praktischer Menüleisten-Tools in einer schlanken App. Erstelle und übersetze Screenshots, generiere QR-Codes, halte deinen Mac wach, durchsuche die Zwischenablage, überwache CPU und Speicher, konvertiere Bilder und komprimiere Archive — alles aus einem einzigen Begleiter in deiner Menüleiste.',
      'hero.btn_download': 'CapyBuddy herunterladen',
      'hero.btn_download_sub': 'Werbefrei · Open Source',
      'hero.btn_inside': 'Inhalt anschauen →',
      'hero.meta': 'Open Source. Keine Konten. Keine Abos.',

      'shots.heading': 'Ein Blick hinein',
      'shots.sub': 'Erfassen und übersetzen, QR-Codes erzeugen, die Zwischenablage-Historie durchsuchen und jedes Tool über die Einstellungen anpassen.',
      'shots.cap1': 'Bereich erfassen → annotieren → übersetzen. Wähle eine Zielsprache, und der erfasste Text wird an Ort und Stelle ersetzt.',
      'shots.cap2': 'Eigene Farben, Punkt- und Augenformen sowie eingebettetes Logo — kopieren oder als PNG speichern.',
      'shots.cap3': 'Durchsuche die letzten <em>n</em> kopierten Inhalte — Text oder Bilder. Hefte häufig genutzte an.',
      'shots.cap4': 'Halte deinen Mac 15 Minuten, eine Stunde oder unbegrenzt wach — Dauer direkt aus der Menüleiste wählen.',
      'shots.cap5': 'Alles lebt in der Menüleiste — öffne jedes Tool aus einem ordentlichen Dropdown.',
      'shots.cap6': 'Wähle aus, welche Tools im Dropdown erscheinen — versteckte laufen weiter im Hintergrund.',
      'shots.cap7': 'Drei Tastenkürzel-Stile zur Auswahl — Snipaste, CleanShot X oder Shottr — um Konflikte zu vermeiden.',
      'shots.cap8': 'CPU und Speicher live in der Menüleiste, formatiert nach deinen Wünschen.',

      'features.heading': 'Ein ganzer Werkzeugkasten, eine Menüleisten-App',
      'features.sub': 'Jedes Tool ist unabhängig — deaktiviere die, die du nicht brauchst, in den Einstellungen.',

      'feat.screenshot.title': 'Screenshot',
      'feat.screenshot.desc': 'Bereichsaufnahme mit globalem Tastenkürzel, dann annotieren, übersetzen, kopieren, speichern oder anheften.',
      'feat.keepawake.title': 'Wach halten',
      'feat.keepawake.desc': 'Verhindert, dass dein Mac für eine gewählte Dauer in den Ruhezustand geht oder das Display dimmt.',
      'feat.clipboard.title': 'Zwischenablage',
      'feat.clipboard.desc': 'Hält eine durchsuchbare Historie der zuletzt kopierten Inhalte, inklusive Bilder. Hefte häufig genutzte an.',
      'feat.monitor.title': 'System-Monitor',
      'feat.monitor.desc': 'Fügt der Menüleiste ein Statuselement mit live CPU, Speicher und weiteren Systemwerten hinzu.',
      'feat.picture.title': 'Bildkonverter',
      'feat.picture.desc': 'Drag-and-Drop-Konverter zwischen PNG, JPEG, HEIC, TIFF, GIF, AVIF, ICO, BMP, ICNS, JP2.',
      'feat.qr.title': 'QR-Code',
      'feat.qr.desc': 'Erzeuge scannbare QR-Codes mit eigenen Farben, Punkt- und Augenformen sowie eingebettetem Logo.',
      'feat.compressor.title': 'Kompressor',
      'feat.compressor.desc': 'Archive per Drag-and-Drop komprimieren oder entpacken — zip, tar, tar.gz, gz.',
      'feat.recording.title': 'Bildschirmaufnahme',
      'feat.recording.desc': 'Nimm den ganzen Bildschirm, ein Fenster oder einen Bereich als MP4/MOV auf — mit System-Audio und Mikro optional.',
      'feat.videoeditor.title': 'Video-Editor',
      'feat.videoeditor.desc': 'Schneide, beschneide, beschleunige oder stumme einen Clip direkt nach der Aufnahme — ohne Extra-App.',
      'feat.space.title': 'Leertaste-Kürzel',
      'feat.space.desc': 'Halte die Leertaste und tippe eine Taste, um deine Lieblings-Apps sofort zu starten oder zu fokussieren.',
      'feat.vault.title': 'Passwort-Tresor',
      'feat.vault.desc': 'Ein voll verschlüsselter Passwort-Manager in der Menüleiste — Standard-KeePass-Format (.kdbx), Touch-ID-Entsperrung, iCloud-Sync.',
      'feat.auth.title': '2FA-Codes',
      'feat.auth.desc': 'Integrierter Authenticator: Zwei-Faktor-Codes direkt neben ihren Passwörtern — ein Klick zum Kopieren.',
      'feat.pro_badge': 'PRO',

      'ob.skip': 'Überspringen',
      'ob.back': 'Zurück',
      'ob.next': 'Weiter',
      'ob.welcome.title': 'Willkommen bei CapyBuddy',
      'ob.welcome.sub': 'Dein freundlicher Menüleisten-Begleiter.',
      'ob.shot.title': 'Screenshot',
      'ob.shot.sub': 'Erfassen, annotieren & übersetzen — ⌃1.',
      'ob.rec.title': 'Bildschirmaufnahme',
      'ob.rec.sub': 'Bildschirm oder Fenster als Video aufnehmen — ⌃2.',
      'ob.space.title': 'Leertaste-Kürzel',
      'ob.space.sub': 'Halte Leertaste, um Apps zu starten.',
      'ob.space.key': 'Leertaste',
      'ob.clip.sub': 'Durchsuche alles, was du kopiert hast.',
      'ob.qr.sub': 'Stilvolle, scannbare QR-Codes.',
      'ob.awake.sub': 'Verhindere, dass dein Mac einschläft.',
      'ob.mon.sub': 'CPU & Speicher live in der Menüleiste.',

      'download.heading': 'CapyBuddy holen',
      'download.sub': 'Open Source, werbefrei. Apple Silicon &amp; Intel.',
      'download.btn': 'Neueste Version laden',
      'download.btn_sub': 'neueste · .dmg',
      'download.view': 'Quellcode auf GitHub ansehen →',

      'nav.pricing': 'Preise',
      'pricing.heading': 'Kostenlos, mit optionalem Pro-Upgrade',
      'pricing.sub': 'Die Kern-Tools sind für immer kostenlos. Schalte die Power-Funktionen einmalig für 1,99 £ frei — ohne Abo.',
      'pricing.free.name': 'Gratis',
      'pricing.free.tagline': 'Die Kern-Tools der Menüleiste, für immer.',
      'pricing.free.perk1': 'Screenshot, Aufnahme & über 20 Toolbox-Tools',
      'pricing.free.perk2': 'Keine Werbung, kein Konto',
      'pricing.free.perk3': 'Apple Silicon und Intel',
      'pricing.free.cta': 'Kostenlos laden',
      'pricing.pro.name': 'Pro',
      'pricing.pro.price_note': 'einmalig · kein Abo',
      'pricing.pro.badge': 'Beste Wahl',
      'pricing.pro.tagline': 'Alles aus Gratis, plus die Power-Tools.',
      'pricing.pro.perk1': 'Verschlüsselter Passwort-Tresor (KeePass-Format)',
      'pricing.pro.perk2': 'Integrierte 2FA-Codes',
      'pricing.pro.perk3': 'App-Kürzel mit Leertaste',
      'pricing.pro.perk4': 'Globales Toolbox-Kürzel (⌃3)',
      'pricing.pro.perk5': 'Aktivierung auf bis zu 3 Macs',
      'pricing.pro.cta': 'CapyBuddy Pro holen',
      'pricing.note': 'Einmalige Zahlung, kein Abo. Sichere Kasse und MwSt. über Lemon Squeezy.',

      'support.heading': 'Support &amp; Feedback',
      'support.sub': 'Einen Bug gefunden? Wünschst du dir ein neues Tool in CapyBuddy? Sag es uns — Tickets landen direkt im GitHub des Projekts.',
      'support.bug.title': 'Bug melden',
      'support.bug.desc': 'Etwas funktioniert nicht? Öffne einen Bug-Report — wir werden auf GitHub benachrichtigt.',
      'support.bug.cta': 'Bug-Report öffnen →',
      'support.feature.title': 'Funktion vorschlagen',
      'support.feature.desc': 'Eine Idee für ein neues Tool in CapyBuddy? Schlag sie vor.',
      'support.feature.cta': 'Funktion vorschlagen →',
      'support.question.title': 'Frage stellen',
      'support.question.desc': 'Probleme mit Berechtigungen oder Tastenkürzeln? Stell eine Frage.',
      'support.question.cta': 'Frage stellen →',
      'support.note': 'Kein GitHub-Konto nötig — dein Feedback geht direkt in unseren Issue-Tracker. Lieber per E-Mail? <a href="mailto:dev@atlai.co.uk?subject=CapyBuddy%20feedback">dev@atlai.co.uk</a>.',

      'footer.fine': '© {year} ATLAI. Mit ❤️ auf einem Mac gemacht.',

      'sp.back': '← Zurück zu CapyBuddy',
      'sp.heading': 'Support &amp; Feedback',
      'sp.sub': 'Einen Bug gefunden? Eine neue Funktion gewünscht? Eine Frage? Reiche sie unten ein — kein GitHub-Konto nötig. Dein Bericht geht direkt in unseren Issue-Tracker.',
      'sp.tab.bug': 'Bug melden',
      'sp.tab.feature': 'Funktion vorschlagen',
      'sp.tab.question': 'Frage stellen',
      'sp.form.title_label': 'Titel',
      'sp.form.title_hint.bug': 'Eine kurze Zusammenfassung des Bugs',
      'sp.form.title_hint.feature': 'Ein kurzer Name für die Funktion',
      'sp.form.title_hint.question': 'Worum geht es bei deiner Frage?',
      'sp.form.title_ph.bug': 'z. B. Screenshot-Tool stürzt bei zwei Monitoren ab',
      'sp.form.title_ph.feature': 'z. B. Dark-Mode-Unterstützung',
      'sp.form.title_ph.question': 'z. B. Wie ändere ich das Screenshot-Tastenkürzel?',
      'sp.form.desc_label.bug': 'Beschreibung',
      'sp.form.desc_label.feature': 'Funktionsbeschreibung',
      'sp.form.desc_label.question': 'Details',
      'sp.form.desc_hint.bug': 'Beschreibe, was passiert ist und was du erwartet hast',
      'sp.form.desc_hint.feature': 'Was würde diese Funktion tun und warum ist sie nützlich?',
      'sp.form.desc_hint.question': 'Gib uns Kontext, damit wir helfen können',
      'sp.form.desc_ph.bug': 'Beschreibe das Problem im Detail...',
      'sp.form.desc_ph.feature': 'Beschreibe die gewünschte Funktion...',
      'sp.form.desc_ph.question': 'Beschreibe deine Frage und was du versucht hast...',
      'sp.form.steps_label': 'Schritte zur Reproduktion',
      'sp.form.steps_hint': 'Wie können wir diesen Bug nachstellen?',
      'sp.form.steps_ph': '1. CapyBuddy öffnen\n2. Klick auf...\n3. ...',
      'sp.form.env_label': 'Umgebung',
      'sp.form.env_hint': 'macOS-Version, CapyBuddy-Version, Mac-Modell',
      'sp.form.env_ph': 'z. B. macOS 15.1, CapyBuddy 1.2, MacBook Air M2',
      'sp.form.contact_label': 'Kontakt (optional)',
      'sp.form.contact_hint': 'E-Mail, falls wir nachfragen sollen',
      'sp.form.contact_ph': 'du@beispiel.com',
      'sp.form.submit.bug': 'Bericht senden',
      'sp.form.submit.feature': 'Vorschlag senden',
      'sp.form.submit.question': 'Frage senden',
      'sp.form.submitting': 'Wird gesendet...',
      'sp.form.success': 'Erfolgreich gesendet! Danke für dein Feedback.',
      'sp.form.error_required': 'Bitte fülle Titel und Beschreibung aus.',
      'sp.form.error_network': 'Netzwerkfehler. Bitte prüfe deine Verbindung und versuche es erneut.',
      'sp.form.error_generic': 'Etwas ist schiefgelaufen. Bitte versuche es erneut.',
    },

    zh: {
      'doc.title': 'CapyBuddy —— 你贴心的 Mac 小伙伴',
      'sp.doc.title': '支持 — CapyBuddy',

      'nav.screenshots': '截图',
      'nav.features': '功能',
      'nav.support': '支持',
      'nav.github': 'GitHub',
      'nav.home': '首页',
      'nav.lang_aria': '选择语言',

      'hero.eyebrow': 'macOS · 菜单栏应用',
      'hero.title': '你贴心的<br/>Mac 小伙伴。',
      'hero.lede': '一整套实用的菜单栏小工具，集成在一个简洁的应用里。截图并翻译、生成二维码、防止 Mac 休眠、浏览剪贴板历史、查看 CPU 与内存、转换图片、压缩与解压 —— 全部由菜单栏里的这位小伙伴一手包办。',
      'hero.btn_download': '下载 CapyBuddy',
      'hero.btn_download_sub': '无广告 · 开源',
      'hero.btn_inside': '看看里面有什么 →',
      'hero.meta': '开源。无账号。无订阅。',

      'shots.heading': '一窥究竟',
      'shots.sub': '截图并翻译、生成二维码、浏览剪贴板历史，并从设置中调校每一个工具。',
      'shots.cap1': '区域截图 → 标注 → 翻译。选择目标语言，捕获的文字将原位渲染。',
      'shots.cap2': '自定义颜色、点形与眼形，并可嵌入 Logo —— 复制或保存为 PNG。',
      'shots.cap3': '搜索最近复制的 <em>n</em> 项内容 —— 文本或图片。常用项可置顶。',
      'shots.cap4': '让你的 Mac 保持 15 分钟、1 小时或无限期清醒 —— 直接在菜单栏选择时长。',
      'shots.cap5': '一切都在菜单栏 —— 在一个简洁的下拉菜单里打开任意工具。',
      'shots.cap6': '选择下拉菜单显示哪些工具 —— 隐藏的依旧在后台运行。',
      'shots.cap7': '三种快捷键风格可选 —— Snipaste、CleanShot X 或 Shottr —— 避免冲突。',
      'shots.cap8': '菜单栏实时显示 CPU 与内存，格式随你设置。',

      'features.heading': '一整套工具，一个菜单栏应用',
      'features.sub': '每个工具相互独立 —— 不需要的可在设置中关闭。',

      'feat.screenshot.title': '截图',
      'feat.screenshot.desc': '通过全局快捷键进行区域截图，然后标注、翻译、复制、保存或置顶结果。',
      'feat.keepawake.title': '防休眠',
      'feat.keepawake.desc': '在指定时长内防止 Mac 休眠或屏幕变暗。',
      'feat.clipboard.title': '剪贴板',
      'feat.clipboard.desc': '保存可搜索的剪贴板历史，包括图片。常用项可置顶。',
      'feat.monitor.title': '系统监视器',
      'feat.monitor.desc': '在菜单栏添加状态项，实时显示 CPU、内存等系统数据。',
      'feat.picture.title': '图片转换器',
      'feat.picture.desc': '拖放转换：PNG、JPEG、HEIC、TIFF、GIF、AVIF、ICO、BMP、ICNS、JP2 互转。',
      'feat.qr.title': '二维码',
      'feat.qr.desc': '生成可扫描的二维码，支持自定义颜色、点形与眼形，可嵌入 Logo。',
      'feat.compressor.title': '压缩工具',
      'feat.compressor.desc': '拖放即可压缩或解压：zip、tar、tar.gz、gz。',
      'feat.recording.title': '屏幕录制',
      'feat.recording.desc': '将全屏、窗口或区域录制为 MP4/MOV —— 可选系统声音与麦克风。',
      'feat.videoeditor.title': '视频剪辑',
      'feat.videoeditor.desc': '录制后即可裁剪、裁切、加速或静音 —— 无需额外应用。',
      'feat.space.title': '空格快捷键',
      'feat.space.desc': '长按空格再按一个键，即可瞬间启动或切换你常用的应用。',
      'feat.vault.title': '密码保险库',
      'feat.vault.desc': '菜单栏里的全加密密码管理器 —— 标准 KeePass (.kdbx) 格式，Touch ID 解锁，iCloud 同步。',
      'feat.auth.title': '2FA 动态码',
      'feat.auth.desc': '内置身份验证器：两步验证码就在对应密码旁边 —— 一键复制。',
      'feat.pro_badge': 'PRO',

      'ob.skip': '跳过',
      'ob.back': '上一步',
      'ob.next': '下一步',
      'ob.welcome.title': '欢迎使用 CapyBuddy',
      'ob.welcome.sub': '你贴心的菜单栏小伙伴。',
      'ob.shot.title': '截图',
      'ob.shot.sub': '截图、标注并翻译 —— ⌃1。',
      'ob.rec.title': '屏幕录制',
      'ob.rec.sub': '将屏幕或窗口录制为视频 —— ⌃2。',
      'ob.space.title': '空格快捷键',
      'ob.space.sub': '长按空格即可启动应用。',
      'ob.space.key': '空格',
      'ob.clip.sub': '搜索你复制过的一切。',
      'ob.qr.sub': '可扫描的个性化二维码。',
      'ob.awake.sub': '防止你的 Mac 进入睡眠。',
      'ob.mon.sub': '菜单栏实时显示 CPU 与内存。',

      'download.heading': '获取 CapyBuddy',
      'download.sub': '开源、无广告。Apple Silicon 与 Intel 通用。',
      'download.btn': '下载最新版本',
      'download.btn_sub': '最新版 · .dmg',
      'download.view': '在 GitHub 查看源码 →',

      'nav.pricing': '价格',
      'pricing.heading': '免费使用，可选 Pro 解锁',
      'pricing.sub': '核心工具永久免费。一次性支付 £1.99 解锁强力功能 —— 无需订阅。',
      'pricing.free.name': '免费',
      'pricing.free.tagline': '核心菜单栏工具，永久免费。',
      'pricing.free.perk1': '截图、录屏及 20+ 工具箱小工具',
      'pricing.free.perk2': '无广告、无需账号',
      'pricing.free.perk3': 'Apple Silicon 与 Intel 通用',
      'pricing.free.cta': '免费下载',
      'pricing.pro.name': 'Pro',
      'pricing.pro.price_note': '一次性付费 · 无订阅',
      'pricing.pro.badge': '超值',
      'pricing.pro.tagline': '包含免费版全部功能，外加强力工具。',
      'pricing.pro.perk1': '加密密码保险库（标准 KeePass 格式）',
      'pricing.pro.perk2': '内置两步验证 (2FA) 动态码',
      'pricing.pro.perk3': '长按空格的应用快捷键',
      'pricing.pro.perk4': '工具箱全局快捷键（⌃3）',
      'pricing.pro.perk5': '最多可在 3 台 Mac 上激活',
      'pricing.pro.cta': '获取 CapyBuddy Pro',
      'pricing.note': '一次性付费，无订阅。由 Lemon Squeezy 提供安全结账并代缴增值税。',

      'support.heading': '支持与反馈',
      'support.sub': '发现 Bug？想要 CapyBuddy 里有新工具？告诉我们 —— 反馈将直接进入项目 GitHub。',
      'support.bug.title': '报告 Bug',
      'support.bug.desc': '哪里不正常？提交一份 Bug 报告 —— 我们会在 GitHub 上收到通知。',
      'support.bug.cta': '提交 Bug 报告 →',
      'support.feature.title': '建议功能',
      'support.feature.desc': '对 CapyBuddy 里的新工具有想法？告诉我们。',
      'support.feature.cta': '提交功能建议 →',
      'support.question.title': '提个问题',
      'support.question.desc': '权限或快捷键卡住了？随时提问。',
      'support.question.cta': '提交问题 →',
      'support.note': '无需 GitHub 账号 —— 你的反馈直接进入我们的 Issue 跟踪。喜欢邮件？<a href="mailto:dev@atlai.co.uk?subject=CapyBuddy%20feedback">dev@atlai.co.uk</a>。',

      'footer.fine': '© {year} ATLAI。用 ❤️ 在 Mac 上做的。',

      'sp.back': '← 返回 CapyBuddy',
      'sp.heading': '支持与反馈',
      'sp.sub': '发现 Bug？想要新功能？有问题？在下面提交 —— 无需 GitHub 账号。报告直接进入我们的 Issue 跟踪。',
      'sp.tab.bug': '报告 Bug',
      'sp.tab.feature': '建议功能',
      'sp.tab.question': '提个问题',
      'sp.form.title_label': '标题',
      'sp.form.title_hint.bug': 'Bug 的简短摘要',
      'sp.form.title_hint.feature': '功能的简短名称',
      'sp.form.title_hint.question': '你的问题是关于什么？',
      'sp.form.title_ph.bug': '例如：截图工具在双显示器下崩溃',
      'sp.form.title_ph.feature': '例如：支持深色模式',
      'sp.form.title_ph.question': '例如：如何修改截图快捷键？',
      'sp.form.desc_label.bug': '描述',
      'sp.form.desc_label.feature': '功能描述',
      'sp.form.desc_label.question': '详情',
      'sp.form.desc_hint.bug': '描述发生了什么以及你期望的是什么',
      'sp.form.desc_hint.feature': '这个功能能做什么？为什么有用？',
      'sp.form.desc_hint.question': '提供上下文以便我们帮助你',
      'sp.form.desc_ph.bug': '详细描述问题…',
      'sp.form.desc_ph.feature': '描述你想要的功能…',
      'sp.form.desc_ph.question': '描述你的问题以及你尝试过的方法…',
      'sp.form.steps_label': '复现步骤',
      'sp.form.steps_hint': '我们如何复现这个 Bug？',
      'sp.form.steps_ph': '1. 打开 CapyBuddy\n2. 点击……\n3. ……',
      'sp.form.env_label': '环境',
      'sp.form.env_hint': 'macOS 版本、CapyBuddy 版本、Mac 型号',
      'sp.form.env_ph': '例如：macOS 15.1、CapyBuddy 1.2、MacBook Air M2',
      'sp.form.contact_label': '联系方式（可选）',
      'sp.form.contact_hint': '如希望我们回复，请留下邮箱',
      'sp.form.contact_ph': 'you@example.com',
      'sp.form.submit.bug': '提交报告',
      'sp.form.submit.feature': '提交建议',
      'sp.form.submit.question': '提交问题',
      'sp.form.submitting': '正在提交…',
      'sp.form.success': '提交成功！感谢你的反馈。',
      'sp.form.error_required': '请填写标题和描述。',
      'sp.form.error_network': '网络错误。请检查网络后重试。',
      'sp.form.error_generic': '出错了，请重试。',
    },

    es: {
      'doc.title': 'CapyBuddy — Tu amigable compañero para Mac',
      'sp.doc.title': 'Soporte — CapyBuddy',

      'nav.screenshots': 'Capturas',
      'nav.features': 'Funciones',
      'nav.support': 'Soporte',
      'nav.github': 'GitHub',
      'nav.home': 'Inicio',
      'nav.lang_aria': 'Elegir idioma',

      'hero.eyebrow': 'macOS · App de barra de menús',
      'hero.title': 'Tu amigable<br/>compañero para Mac.',
      'hero.lede': 'Toda una caja de herramientas para la barra de menús, en una sola app cuidada. Captura y traduce capturas, genera códigos QR, mantén tu Mac despierto, navega por el portapapeles, vigila CPU y memoria, convierte imágenes y comprime archivos — todo desde un solo compañero en tu barra de menús.',
      'hero.btn_download': 'Descargar CapyBuddy',
      'hero.btn_download_sub': 'Sin anuncios · Código abierto',
      'hero.btn_inside': 'Ver qué contiene →',
      'hero.meta': 'Código abierto. Sin cuentas. Sin suscripciones.',

      'shots.heading': 'Un vistazo dentro',
      'shots.sub': 'Captura y traduce, genera códigos QR, navega por el historial del portapapeles y ajusta cada herramienta desde Ajustes.',
      'shots.cap1': 'Captura de zona → anotar → traducir. Elige un idioma de destino y el texto capturado se renderiza en su sitio.',
      'shots.cap2': 'Colores personalizados, formas de puntos y ojos, y un logo incrustado — copia o guarda como PNG.',
      'shots.cap3': 'Busca los últimos <em>n</em> elementos copiados — texto o imágenes. Fija los que más reutilices.',
      'shots.cap4': 'Mantén tu Mac despierto 15 minutos, una hora o indefinidamente — elige la duración desde la barra de menús.',
      'shots.cap5': 'Todo vive en la barra de menús — abre cualquier herramienta desde un desplegable ordenado.',
      'shots.cap6': 'Elige qué herramientas aparecen en el desplegable — las ocultas siguen ejecutándose en segundo plano.',
      'shots.cap7': 'Tres estilos de atajos a elegir — Snipaste, CleanShot X o Shottr — para evitar conflictos.',
      'shots.cap8': 'CPU y memoria en vivo en la barra de menús, con el formato que prefieras.',

      'features.heading': 'Toda una caja de herramientas, una sola app',
      'features.sub': 'Cada herramienta es independiente — desactiva las que no necesites desde Ajustes.',

      'feat.screenshot.title': 'Captura',
      'feat.screenshot.desc': 'Captura de zona con atajo global, luego anota, traduce, copia, guarda o fija el resultado.',
      'feat.keepawake.title': 'Mantener despierto',
      'feat.keepawake.desc': 'Evita que tu Mac se suspenda o que la pantalla se atenúe durante el tiempo que elijas.',
      'feat.clipboard.title': 'Portapapeles',
      'feat.clipboard.desc': 'Mantiene un historial buscable de los elementos recientes del portapapeles, incluidas imágenes. Fija los que reutilices.',
      'feat.monitor.title': 'Monitor del sistema',
      'feat.monitor.desc': 'Añade a la barra de menús un indicador con CPU, memoria y otras estadísticas en vivo.',
      'feat.picture.title': 'Conversor de imágenes',
      'feat.picture.desc': 'Conversor de arrastrar y soltar entre PNG, JPEG, HEIC, TIFF, GIF, AVIF, ICO, BMP, ICNS, JP2.',
      'feat.qr.title': 'Código QR',
      'feat.qr.desc': 'Genera códigos QR escaneables con colores propios, formas de puntos y ojos, y un logo incrustado.',
      'feat.compressor.title': 'Compresor',
      'feat.compressor.desc': 'Comprime o extrae archivos — zip, tar, tar.gz, gz — con una ventana simple de arrastrar y soltar.',
      'feat.recording.title': 'Grabación de pantalla',
      'feat.recording.desc': 'Graba la pantalla completa, una ventana o una zona en MP4/MOV — con audio del sistema y micro opcionales.',
      'feat.videoeditor.title': 'Editor de vídeo',
      'feat.videoeditor.desc': 'Recorta, encuadra, acelera o silencia un clip justo después de grabar — sin otra app.',
      'feat.space.title': 'Atajo con Espacio',
      'feat.space.desc': 'Mantén la barra espaciadora y pulsa una tecla para abrir o enfocar al instante tus apps favoritas.',
      'feat.vault.title': 'Bóveda de contraseñas',
      'feat.vault.desc': 'Un gestor de contraseñas totalmente cifrado en tu barra de menús — formato estándar KeePass (.kdbx), desbloqueo con Touch ID, sincronización con iCloud.',
      'feat.auth.title': 'Códigos 2FA',
      'feat.auth.desc': 'Autenticador integrado: los códigos de dos factores viven junto a sus contraseñas — un clic para copiar.',
      'feat.pro_badge': 'PRO',

      'ob.skip': 'Saltar',
      'ob.back': 'Atrás',
      'ob.next': 'Siguiente',
      'ob.welcome.title': 'Te damos la bienvenida a CapyBuddy',
      'ob.welcome.sub': 'Tu compañero de la barra de menús.',
      'ob.shot.title': 'Captura',
      'ob.shot.sub': 'Captura, anota y traduce — ⌃1.',
      'ob.rec.title': 'Grabación de pantalla',
      'ob.rec.sub': 'Graba la pantalla o una ventana — ⌃2.',
      'ob.space.title': 'Atajo con Espacio',
      'ob.space.sub': 'Mantén Espacio para abrir apps.',
      'ob.space.key': 'espacio',
      'ob.clip.sub': 'Busca todo lo que has copiado.',
      'ob.qr.sub': 'Códigos QR con estilo y escaneables.',
      'ob.awake.sub': 'Evita que tu Mac se duerma.',
      'ob.mon.sub': 'CPU y memoria en vivo en la barra.',

      'download.heading': 'Obtener CapyBuddy',
      'download.sub': 'Código abierto, sin anuncios. Apple Silicon e Intel.',
      'download.btn': 'Descargar la última versión',
      'download.btn_sub': 'última · .dmg',
      'download.view': 'Ver el código en GitHub →',

      'nav.pricing': 'Precios',
      'pricing.heading': 'Gratis, con desbloqueo Pro opcional',
      'pricing.sub': 'Las herramientas básicas son gratis para siempre. Desbloquea las funciones avanzadas una vez por 1,99 £ — sin suscripción.',
      'pricing.free.name': 'Gratis',
      'pricing.free.tagline': 'Las herramientas básicas de la barra de menús, para siempre.',
      'pricing.free.perk1': 'Captura, grabación y más de 20 herramientas',
      'pricing.free.perk2': 'Sin anuncios, sin cuenta',
      'pricing.free.perk3': 'Apple Silicon e Intel',
      'pricing.free.cta': 'Descargar gratis',
      'pricing.pro.name': 'Pro',
      'pricing.pro.price_note': 'pago único · sin suscripción',
      'pricing.pro.badge': 'Mejor opción',
      'pricing.pro.tagline': 'Todo lo de Gratis, más las herramientas avanzadas.',
      'pricing.pro.perk1': 'Bóveda de contraseñas cifrada (formato KeePass)',
      'pricing.pro.perk2': 'Códigos 2FA integrados',
      'pricing.pro.perk3': 'Atajos de apps con Espacio',
      'pricing.pro.perk4': 'Atajo global de la caja de herramientas (⌃3)',
      'pricing.pro.perk5': 'Actívalo en hasta 3 Macs',
      'pricing.pro.cta': 'Obtener CapyBuddy Pro',
      'pricing.note': 'Pago único, sin suscripción. Pago seguro e IVA gestionados por Lemon Squeezy.',

      'support.heading': 'Soporte y comentarios',
      'support.sub': '¿Encontraste un bug? ¿Quieres una nueva herramienta dentro de CapyBuddy? Cuéntanoslo — los reportes llegan directos al GitHub del proyecto.',
      'support.bug.title': 'Reportar un bug',
      'support.bug.desc': '¿Algo no funciona? Abre un reporte de bug — nos llegará por GitHub.',
      'support.bug.cta': 'Abrir reporte →',
      'support.feature.title': 'Sugerir una función',
      'support.feature.desc': '¿Tienes una idea para una nueva herramienta en CapyBuddy? Propónla.',
      'support.feature.cta': 'Sugerir función →',
      'support.question.title': 'Hacer una pregunta',
      'support.question.desc': '¿Atascado con permisos o atajos? Lanza tu pregunta.',
      'support.question.cta': 'Hacer pregunta →',
      'support.note': 'No necesitas cuenta de GitHub — tus comentarios van directos a nuestro tracker. ¿Prefieres email? <a href="mailto:dev@atlai.co.uk?subject=CapyBuddy%20feedback">dev@atlai.co.uk</a>.',

      'footer.fine': '© {year} ATLAI. Hecho con ❤️ en un Mac.',

      'sp.back': '← Volver a CapyBuddy',
      'sp.heading': 'Soporte y comentarios',
      'sp.sub': '¿Encontraste un bug? ¿Quieres una nueva función? ¿Tienes una pregunta? Envíalo abajo — no hace falta cuenta de GitHub. Tu reporte va directo a nuestro tracker.',
      'sp.tab.bug': 'Reportar un bug',
      'sp.tab.feature': 'Sugerir una función',
      'sp.tab.question': 'Hacer una pregunta',
      'sp.form.title_label': 'Título',
      'sp.form.title_hint.bug': 'Un resumen corto del bug',
      'sp.form.title_hint.feature': 'Un nombre corto para la función',
      'sp.form.title_hint.question': '¿Sobre qué es tu pregunta?',
      'sp.form.title_ph.bug': 'p. ej. La captura falla con dos monitores',
      'sp.form.title_ph.feature': 'p. ej. Modo oscuro',
      'sp.form.title_ph.question': 'p. ej. ¿Cómo cambio el atajo de captura?',
      'sp.form.desc_label.bug': 'Descripción',
      'sp.form.desc_label.feature': 'Descripción de la función',
      'sp.form.desc_label.question': 'Detalles',
      'sp.form.desc_hint.bug': 'Describe qué pasó y qué esperabas',
      'sp.form.desc_hint.feature': '¿Qué haría esta función y por qué es útil?',
      'sp.form.desc_hint.question': 'Da contexto para que podamos ayudarte',
      'sp.form.desc_ph.bug': 'Describe el problema en detalle...',
      'sp.form.desc_ph.feature': 'Describe la función que te gustaría...',
      'sp.form.desc_ph.question': 'Describe tu pregunta y lo que has intentado...',
      'sp.form.steps_label': 'Pasos para reproducir',
      'sp.form.steps_hint': '¿Cómo reproducimos este bug?',
      'sp.form.steps_ph': '1. Abrir CapyBuddy\n2. Clic en...\n3. ...',
      'sp.form.env_label': 'Entorno',
      'sp.form.env_hint': 'Versión de macOS, versión de CapyBuddy, modelo de Mac',
      'sp.form.env_ph': 'p. ej. macOS 15.1, CapyBuddy 1.2, MacBook Air M2',
      'sp.form.contact_label': 'Contacto (opcional)',
      'sp.form.contact_hint': 'Email si quieres que te respondamos',
      'sp.form.contact_ph': 'tu@ejemplo.com',
      'sp.form.submit.bug': 'Enviar reporte',
      'sp.form.submit.feature': 'Enviar sugerencia',
      'sp.form.submit.question': 'Enviar pregunta',
      'sp.form.submitting': 'Enviando...',
      'sp.form.success': '¡Enviado! Gracias por tus comentarios.',
      'sp.form.error_required': 'Por favor, rellena el título y la descripción.',
      'sp.form.error_network': 'Error de red. Comprueba tu conexión e inténtalo de nuevo.',
      'sp.form.error_generic': 'Algo salió mal. Inténtalo de nuevo.',
    },

    ru: {
      'doc.title': 'CapyBuddy — Дружелюбный помощник для вашего Mac',
      'sp.doc.title': 'Поддержка — CapyBuddy',

      'nav.screenshots': 'Скриншоты',
      'nav.features': 'Функции',
      'nav.support': 'Поддержка',
      'nav.github': 'GitHub',
      'nav.home': 'Главная',
      'nav.lang_aria': 'Выбрать язык',

      'hero.eyebrow': 'macOS · Приложение в строке меню',
      'hero.title': 'Дружелюбный<br/>помощник для Mac.',
      'hero.lede': 'Целый набор удобных инструментов для строки меню в одном аккуратном приложении. Делайте и переводите скриншоты, генерируйте QR-коды, не давайте Mac уснуть, просматривайте буфер обмена, следите за CPU и памятью, конвертируйте изображения и сжимайте архивы — всё от одного помощника в вашей строке меню.',
      'hero.btn_download': 'Скачать CapyBuddy',
      'hero.btn_download_sub': 'Без рекламы · Открытый код',
      'hero.btn_inside': 'Заглянуть внутрь →',
      'hero.meta': 'Открытый код. Без учётных записей. Без подписок.',

      'shots.heading': 'Загляните внутрь',
      'shots.sub': 'Делайте и переводите скриншоты, генерируйте QR-коды, просматривайте историю буфера обмена и настраивайте каждый инструмент в Настройках.',
      'shots.cap1': 'Захват области → разметка → перевод. Выберите целевой язык, и распознанный текст вернётся на место.',
      'shots.cap2': 'Свои цвета, формы точек и глаз и встроенный логотип — копируйте или сохраняйте как PNG.',
      'shots.cap3': 'Ищите последние <em>n</em> скопированных элементов — текст или изображения. Закрепляйте те, что чаще используете.',
      'shots.cap4': 'Удерживайте Mac бодрствующим 15 минут, час или бесконечно — выберите длительность прямо из строки меню.',
      'shots.cap5': 'Всё живёт в строке меню — открывайте любой инструмент из одного аккуратного меню.',
      'shots.cap6': 'Выбирайте, какие инструменты появляются в меню — скрытые продолжают работать в фоне.',
      'shots.cap7': 'Три стиля горячих клавиш на выбор — Snipaste, CleanShot X или Shottr — чтобы избежать конфликтов.',
      'shots.cap8': 'CPU и память в реальном времени в строке меню, в нужном вам формате.',

      'features.heading': 'Целый набор инструментов, одно приложение',
      'features.sub': 'Каждый инструмент независим — отключите ненужные в Настройках.',

      'feat.screenshot.title': 'Скриншот',
      'feat.screenshot.desc': 'Захват области по глобальной горячей клавише, затем разметка, перевод, копирование, сохранение или закрепление результата.',
      'feat.keepawake.title': 'Не давать уснуть',
      'feat.keepawake.desc': 'Не даёт Mac уйти в сон или затемнить экран на выбранное время.',
      'feat.clipboard.title': 'Буфер обмена',
      'feat.clipboard.desc': 'Хранит историю буфера обмена с поиском, включая изображения. Закрепляйте часто используемые.',
      'feat.monitor.title': 'Системный монитор',
      'feat.monitor.desc': 'Добавляет в строку меню статус с реальными CPU, памятью и другими показателями системы.',
      'feat.picture.title': 'Конвертер изображений',
      'feat.picture.desc': 'Drag-and-drop конвертер между PNG, JPEG, HEIC, TIFF, GIF, AVIF, ICO, BMP, ICNS, JP2.',
      'feat.qr.title': 'QR-код',
      'feat.qr.desc': 'Создавайте сканируемые QR-коды со своими цветами, формой точек и глаз и встроенным логотипом.',
      'feat.compressor.title': 'Архиватор',
      'feat.compressor.desc': 'Сжимайте и распаковывайте архивы — zip, tar, tar.gz, gz — простым перетаскиванием.',
      'feat.recording.title': 'Запись экрана',
      'feat.recording.desc': 'Записывайте весь экран, окно или область в MP4/MOV — со звуком системы и микрофоном по желанию.',
      'feat.videoeditor.title': 'Видеоредактор',
      'feat.videoeditor.desc': 'Обрежьте, кадрируйте, ускорьте или заглушите клип сразу после записи — без отдельного приложения.',
      'feat.space.title': 'Горячая клавиша Пробел',
      'feat.space.desc': 'Удерживайте пробел и нажмите клавишу, чтобы мгновенно запустить или открыть любимые приложения.',
      'feat.vault.title': 'Хранилище паролей',
      'feat.vault.desc': 'Полностью зашифрованный менеджер паролей в строке меню — стандартный формат KeePass (.kdbx), разблокировка Touch ID, синхронизация iCloud.',
      'feat.auth.title': 'Коды 2FA',
      'feat.auth.desc': 'Встроенный аутентификатор: коды двухфакторной защиты рядом с их паролями — копирование в один клик.',
      'feat.pro_badge': 'PRO',

      'ob.skip': 'Пропустить',
      'ob.back': 'Назад',
      'ob.next': 'Далее',
      'ob.welcome.title': 'Добро пожаловать в CapyBuddy',
      'ob.welcome.sub': 'Ваш дружелюбный помощник в строке меню.',
      'ob.shot.title': 'Скриншот',
      'ob.shot.sub': 'Захват, разметка и перевод — ⌃1.',
      'ob.rec.title': 'Запись экрана',
      'ob.rec.sub': 'Записывайте экран или окно в видео — ⌃2.',
      'ob.space.title': 'Клавиша Пробел',
      'ob.space.sub': 'Удерживайте Пробел, чтобы запускать приложения.',
      'ob.space.key': 'пробел',
      'ob.clip.sub': 'Ищите всё, что вы копировали.',
      'ob.qr.sub': 'Стильные сканируемые QR-коды.',
      'ob.awake.sub': 'Не дайте Mac уснуть.',
      'ob.mon.sub': 'CPU и память в реальном времени в меню.',

      'download.heading': 'Получить CapyBuddy',
      'download.sub': 'Открытый код, без рекламы. Apple Silicon и Intel.',
      'download.btn': 'Скачать последнюю версию',
      'download.btn_sub': 'последняя · .dmg',
      'download.view': 'Открыть исходники на GitHub →',

      'nav.pricing': 'Цены',
      'pricing.heading': 'Бесплатно, с опциональным Pro',
      'pricing.sub': 'Основные инструменты бесплатны навсегда. Разблокируйте мощные функции один раз за £1.99 — без подписки.',
      'pricing.free.name': 'Бесплатно',
      'pricing.free.tagline': 'Основные инструменты строки меню — навсегда.',
      'pricing.free.perk1': 'Скриншоты, запись экрана и 20+ инструментов',
      'pricing.free.perk2': 'Без рекламы и без аккаунта',
      'pricing.free.perk3': 'Apple Silicon и Intel',
      'pricing.free.cta': 'Скачать бесплатно',
      'pricing.pro.name': 'Pro',
      'pricing.pro.price_note': 'разовая оплата · без подписки',
      'pricing.pro.badge': 'Выгодно',
      'pricing.pro.tagline': 'Всё из бесплатной версии плюс мощные инструменты.',
      'pricing.pro.perk1': 'Зашифрованное хранилище паролей (формат KeePass)',
      'pricing.pro.perk2': 'Встроенные коды 2FA',
      'pricing.pro.perk3': 'Горячие клавиши приложений с пробелом',
      'pricing.pro.perk4': 'Глобальная горячая клавиша набора инструментов (⌃3)',
      'pricing.pro.perk5': 'Активация на 3 Mac',
      'pricing.pro.cta': 'Получить CapyBuddy Pro',
      'pricing.note': 'Разовая оплата, без подписки. Безопасная оплата и НДС через Lemon Squeezy.',

      'support.heading': 'Поддержка и отзывы',
      'support.sub': 'Нашли баг? Хотите новый инструмент в CapyBuddy? Скажите нам — задачи попадают прямо в GitHub проекта.',
      'support.bug.title': 'Сообщить о баге',
      'support.bug.desc': 'Что-то не работает? Откройте баг-репорт — мы получим уведомление на GitHub.',
      'support.bug.cta': 'Открыть баг-репорт →',
      'support.feature.title': 'Предложить функцию',
      'support.feature.desc': 'Есть идея для нового инструмента в CapyBuddy? Поделитесь.',
      'support.feature.cta': 'Предложить функцию →',
      'support.question.title': 'Задать вопрос',
      'support.question.desc': 'Застряли на разрешениях или горячих клавишах? Задайте вопрос.',
      'support.question.cta': 'Задать вопрос →',
      'support.note': 'GitHub-аккаунт не нужен — ваши отзывы попадают прямо в наш трекер задач. Предпочитаете email? <a href="mailto:dev@atlai.co.uk?subject=CapyBuddy%20feedback">dev@atlai.co.uk</a>.',

      'footer.fine': '© {year} ATLAI. Сделано с ❤️ на Mac.',

      'sp.back': '← Назад к CapyBuddy',
      'sp.heading': 'Поддержка и отзывы',
      'sp.sub': 'Нашли баг? Хотите новую функцию? Есть вопрос? Отправьте ниже — GitHub-аккаунт не нужен. Ваш отчёт попадёт прямо в наш трекер.',
      'sp.tab.bug': 'Сообщить о баге',
      'sp.tab.feature': 'Предложить функцию',
      'sp.tab.question': 'Задать вопрос',
      'sp.form.title_label': 'Заголовок',
      'sp.form.title_hint.bug': 'Короткое описание бага',
      'sp.form.title_hint.feature': 'Короткое название функции',
      'sp.form.title_hint.question': 'О чём ваш вопрос?',
      'sp.form.title_ph.bug': 'например, Скриншот падает на двух мониторах',
      'sp.form.title_ph.feature': 'например, Поддержка тёмной темы',
      'sp.form.title_ph.question': 'например, Как сменить горячую клавишу для скриншота?',
      'sp.form.desc_label.bug': 'Описание',
      'sp.form.desc_label.feature': 'Описание функции',
      'sp.form.desc_label.question': 'Подробности',
      'sp.form.desc_hint.bug': 'Опишите, что случилось и что вы ожидали',
      'sp.form.desc_hint.feature': 'Что будет делать эта функция и зачем она нужна?',
      'sp.form.desc_hint.question': 'Дайте контекст, чтобы мы могли помочь',
      'sp.form.desc_ph.bug': 'Опишите проблему подробно...',
      'sp.form.desc_ph.feature': 'Опишите желаемую функцию...',
      'sp.form.desc_ph.question': 'Опишите ваш вопрос и что вы уже пробовали...',
      'sp.form.steps_label': 'Шаги для воспроизведения',
      'sp.form.steps_hint': 'Как нам воспроизвести этот баг?',
      'sp.form.steps_ph': '1. Открыть CapyBuddy\n2. Нажать...\n3. ...',
      'sp.form.env_label': 'Окружение',
      'sp.form.env_hint': 'Версия macOS, версия CapyBuddy, модель Mac',
      'sp.form.env_ph': 'например, macOS 15.1, CapyBuddy 1.2, MacBook Air M2',
      'sp.form.contact_label': 'Контакт (необязательно)',
      'sp.form.contact_hint': 'Email, если хотите получить ответ',
      'sp.form.contact_ph': 'you@example.com',
      'sp.form.submit.bug': 'Отправить отчёт',
      'sp.form.submit.feature': 'Отправить предложение',
      'sp.form.submit.question': 'Отправить вопрос',
      'sp.form.submitting': 'Отправка...',
      'sp.form.success': 'Успешно отправлено! Спасибо за отзыв.',
      'sp.form.error_required': 'Заполните заголовок и описание.',
      'sp.form.error_network': 'Сетевая ошибка. Проверьте соединение и попробуйте снова.',
      'sp.form.error_generic': 'Что-то пошло не так. Попробуйте снова.',
    },
  };

  function readStoredLang() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && DICT[stored]) return stored;
    } catch (e) {}
    return 'en';
  }

  const state = { lang: readStoredLang() };

  function tr(key, lang) {
    const code = lang || state.lang;
    const dict = DICT[code] || DICT.en;
    if (dict[key] != null) return dict[key];
    return (DICT.en && DICT.en[key]) || '';
  }

  function interp(s) {
    return s.replace('{year}', new Date().getFullYear());
  }

  function apply(lang) {
    state.lang = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const v = tr(key, lang);
      if (v) el.textContent = interp(v);
    });

    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      const v = tr(key, lang);
      if (v) el.innerHTML = interp(v);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      const v = tr(key, lang);
      if (v) el.setAttribute('placeholder', v);
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria-label');
      const v = tr(key, lang);
      if (v) el.setAttribute('aria-label', v);
    });

    const titleKey = document.documentElement.getAttribute('data-i18n-title');
    if (titleKey) {
      const v = tr(titleKey, lang);
      if (v) document.title = v;
    }

    const cur = document.querySelector('.lang-current');
    if (cur) {
      const def = LANGS.find((l) => l.code === lang);
      if (def) cur.textContent = def.short;
    }
    document.querySelectorAll('.lang-menu [data-lang]').forEach((b) => {
      b.classList.toggle('active', b.getAttribute('data-lang') === lang);
    });

    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
  }

  function initSwitcher() {
    const root = document.querySelector('.lang-switcher');
    if (!root) return;
    const btn = root.querySelector('.lang-btn');

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = root.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    document.addEventListener('click', () => {
      if (root.classList.contains('open')) {
        root.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && root.classList.contains('open')) {
        root.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        btn.focus();
      }
    });

    root.querySelectorAll('[data-lang]').forEach((b) => {
      b.addEventListener('click', (e) => {
        e.stopPropagation();
        const code = b.getAttribute('data-lang');
        try { localStorage.setItem(STORAGE_KEY, code); } catch (err) {}
        apply(code);
        root.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  window.CapyBuddyI18N = {
    get lang() { return state.lang; },
    t: (key) => tr(key, state.lang),
    apply,
    LANGS,
  };

  function initOnboarding() {
    const card = document.getElementById('ob-card');
    if (!card) return;
    const scenes = Array.prototype.slice.call(card.querySelectorAll('.ob-scene'));
    const dots = Array.prototype.slice.call(card.querySelectorAll('.ob-dot'));
    if (!scenes.length) return;
    const ACCENTS = {
      blue: '#4a72ff', orange: '#d97a2c', red: '#e5484d', violet: '#7a5cff',
      indigo: '#5b5bd6', teal: '#0fb5ae', amber: '#d9a441', green: '#2f9e6b',
    };

    let i = 0;
    function show(n) {
      i = (n + scenes.length) % scenes.length;
      scenes.forEach((s, k) => s.classList.toggle('is-active', k === i));
      dots.forEach((d, k) => d.classList.toggle('is-active', k === i));
      const accent = ACCENTS[scenes[i].getAttribute('data-accent')] || ACCENTS.blue;
      card.style.setProperty('--ob-accent', accent);
      card.setAttribute('data-scene', String(i));
    }

    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let timer = null;
    function stop() { if (timer) { clearInterval(timer); timer = null; } }
    function start() { if (reduce) return; stop(); timer = setInterval(() => show(i + 1), 3000); }

    dots.forEach((d, k) => d.addEventListener('click', () => { show(k); start(); }));
    const back = card.querySelector('.ob-btn-back');
    const next = card.querySelector('.ob-btn-next');
    if (back) back.addEventListener('click', () => { show(i - 1); start(); });
    if (next) next.addEventListener('click', () => { show(i + 1); start(); });

    show(0);
    start();
  }

  function init() {
    initSwitcher();
    apply(state.lang);
    initOnboarding();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
