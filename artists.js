// Enrichment data for the Artists tab, keyed by exact name as it appears in
// data.js. Only artists with a 2+ hour set get researched first (see
// houghton-timetable project notes) — anyone missing from this object still
// shows up in the list, just without a bio/link yet.
const ARTIST_DATA = {
  ".VRIL": {
    "description": "German-born, Portugal-based techno producer who performs under the deliberately anonymous alias .VRIL, active since 2011 with releases across Giegling, Delsin, Tresor and Ostgut Ton. Best known for the hypnotic live album Anima Mundi, originally issued as a Giegling cassette before a wider reissue; Resident Advisor called his sound \"sublime live techno with a subtle twist.\"",
    "soundcloudUrl": "https://soundcloud.com/slam_djs/slamradio-651-vril",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F2118620133&show_artwork=true\"></iframe>"
  },
  "Aba Shanti-i": {
    "description": "UK sound system operator and dub selector, a fixture at Notting Hill Carnival since the early 1990s, known for heavyweight roots reggae and dub played through his own custom-built rig.",
    "soundcloudUrl": "https://soundcloud.com/platform/aba-shanti-i-boiler-room-x-notting-hill-carnival-2017-dj-set",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F343520916&show_artwork=true\"></iframe>"
  },
  "Adam Curtain": {
    "description": "Founder of the Trouble Maker label, a UK producer and mix engineer known for pushing club music into unconventional, bass-heavy territory.",
    "soundcloudUrl": "https://soundcloud.com/egroove/eg569-adam-curtain",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F253782924&show_artwork=true\"></iframe>"
  },
  "Adam Shelton": {
    "description": "Birmingham house DJ and producer, co-founder of One Records and a driving force behind the city's Below parties and The Rainbow venue.",
    "soundcloudUrl": "https://soundcloud.com/crackmagazine/crack-mix-172-adam-shelton",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F350610319&show_artwork=true\"></iframe>"
  },
  "Alex Downey": {
    "description": "Brighton techno DJ and record collector with roots in the early-90s rave scene, a longtime Freerotation resident known for deep, vinyl-driven sets.",
    "soundcloudUrl": "https://soundcloud.com/alex-downey/alex-downeys-the-amps-are-on-fire-mix-live-at-freerotation-2019",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F659576324&show_artwork=true\"></iframe>"
  },
  "Amit": {
    "description": "Co-founder, with his brother Aneesh, of Brilliant Corners, the London wine bar and audiophile sound system celebrated for its eclectic, deep-digging record selections.",
    "soundcloudUrl": "https://soundcloud.com/hiddensoundslondon/hiddensounds008-wamit",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1176045586&show_artwork=true\"></iframe>"
  },
  "Andy Bainbridge (Not An Animal)": {
    "description": "London DJ and producer, co-founder of Not An Animal Records, a label born out of the after-hours Bad Passion party scene, known for raw, dubbed-out house.",
    "soundcloudUrl": "https://soundcloud.com/notananimalrecords/naar019-andy-bainbridge-up-too-much-clips",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1609658682&show_artwork=true\"></iframe>"
  },
  "Anna Wall": {
    "description": "London DJ and fabric resident since 2019, known for weaving house, techno, electro and acid into her sets, and runs the record label The Bricks.",
    "soundcloudUrl": "https://soundcloud.com/fabric/anna-wall-fabric-promo-mix-2021",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1092065131&show_artwork=true\"></iframe>"
  },
  "Aoki Takamasa": {
    "description": "Osaka-based Japanese electronic producer and DJ active since 2001, known for meticulous, glitch-tinged productions and his work in the duo Neutral with Fumitake Tamura.",
    "soundcloudUrl": "https://soundcloud.com/vhsrec/aoki-takamasa-live-performance-circus-osaka-22022019",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F588426156&show_artwork=true\"></iframe>"
  },
  "Ario": {
    "description": "London-based founder of the acclaimed ambient and dub-techno label Astral Industries, known for his deep knowledge of drone, dub and fourth-world sound.",
    "soundcloudUrl": "https://soundcloud.com/astrangelyisolatedplace/isolatedmix-73-astral-industries",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F347257607&show_artwork=true\"></iframe>"
  },
  "Awkward Moments": {
    "description": "London duo of producer Mimi Xu and multi-instrumentalist and vocalist MAGUIRE, working together as Awkward Moments since 2018. Their audiovisual live shows move between rave-facing electronics, dark pop and ambient neo-classical drift, staged with costume, film and projection. They premiered their debut album An Entropic Cycle at Houghton."
  },
  "Aurora Halal": {
    "description": "Brooklyn techno producer and DJ, founder of the Mutual Dreaming party series and co-founder of the Sustain-Release festival, known for hardware-driven, psychedelic sets.",
    "soundcloudUrl": "https://soundcloud.com/resident-advisor/ra681-aurora-halal",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F637818162&show_artwork=true\"></iframe>"
  },
  "Baby Vulture": {
    "description": "Stage name of Daniela Huerta, a Mexican-born, Berlin-based multidisciplinary artist whose practice spans performance art, multimedia projects and sound design alongside her DJing, with collaborations including Soundwalk Collective and Cornerbred.",
    "soundcloudUrl": "https://soundcloud.com/the-ransom-note/baby-vulture-the-shine-a-light-on-mix",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F859698685&show_artwork=true\"></iframe>"
  },
  "Bas Ibellini": {
    "description": "London DJ and producer with two decades on the international circuit, having played fabric, DC10 and Output New York, and founder of the Peculiar party.",
    "soundcloudUrl": "https://soundcloud.com/fabric/bas-ibellini-fabric-x-tuskegee-promo-mix",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F198920428&show_artwork=true\"></iframe>"
  },
  "Batu": {
    "description": "Bristol producer (Omar McCutcheon) and founder of the Timedance label, known for a distinctive, rhythmically adventurous strain of UK club music and techno.",
    "soundcloudUrl": "https://soundcloud.com/mixmag-1/the-cover-mix-batu",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F2190659351&show_artwork=true\"></iframe>"
  },
  "Ben UFO": {
    "description": "London DJ (Ben Thomson) and co-founder of Hessle Audio, a hugely influential selector across bass, house and techno known for his long-running Rinse FM show.",
    "soundcloudUrl": "https://soundcloud.com/resident-advisor/ra238-ben-ufo-1",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F236772946&show_artwork=true\"></iframe>"
  },
  "Aneesh": {
    "description": "Co-founder, with his brother Amit, of Brilliant Corners, the acclaimed London wine bar and sound system known for curating deep, genre-spanning listening sessions."
  },
  "Belle Bête": {
    "description": "London selector and co-founder of the long-running Beauty and the Beat parties and label, known for deep, psychedelic, genre-crossing sets.",
    "soundcloudUrl": "https://soundcloud.com/belle-bete/bb-at-batb-oct21",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1185229921&show_artwork=true\"></iframe>"
  },
  "Bill Brewster": {
    "description": "British DJ and music journalist who co-wrote the acclaimed DJ history book \"Last Night a DJ Saved My Life\" and co-founded DJhistory.com; a former Fabric resident with an encyclopaedic knowledge of disco, house and club culture.",
    "soundcloudUrl": "https://soundcloud.com/billbrewster/bill-brewster-resident-advisor",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F68403312&show_artwork=true\"></iframe>"
  },
  "Billy Nasty": {
    "description": "British techno and electro DJ (real name William Nastri) who cut his teeth in London's early acid house scene at The Brain club and Drum Club, later founding the Tortured Records label and now running the Vinyl Curtain record shop in Brighton.",
    "soundcloudUrl": "https://soundcloud.com/djbillynasty/816-club-mix",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F282699897&show_artwork=true\"></iframe>"
  },
  "Binh": {
    "description": "Dusseldorf-born, Berlin-based DJ known for digging up under-the-radar house, techno and electro records; started out as a resident at Tribehouse before building an international reputation for eclectic, high-drama sets.",
    "soundcloudUrl": "https://soundcloud.com/resident-advisor/ra-989-binh",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F2097030555&show_artwork=true\"></iframe>"
  },
  "Bobby.": {
    "description": "DJ and founder of Pleasure Club and a fabric resident, best known for co-curating Houghton Festival alongside Craig Richards and for slick, unpredictable selections in the festival's own venues.",
    "soundcloudUrl": "https://soundcloud.com/houghton-festival/recorded-at-houghton-bobby-2023",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1801816201&show_artwork=true\"></iframe>"
  },
  "Bruno Schmidt": {
    "description": "UK-schooled, Berlin-based DJ and producer who earned residencies at Leeds' Mint Club and London's fabric before relocating to Berlin in 2016; known for tight, minimalist productions and a Rinse FM residency.",
    "soundcloudUrl": "https://soundcloud.com/rinsefm/brunoschmidt211023",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1647341530&show_artwork=true\"></iframe>"
  },
  "C.A.R": {
    "description": "Recording name of Chloé Raunet, a Canadian-born, London-based artist whose sound blends glacial electronica, post-punk and introspective pop across three albums for Kill The DJ and Ransom Note; known for hypnotic live performances and a monthly NTS Radio show.",
    "soundcloudUrl": "https://soundcloud.com/c_a_r/c-a-r-angelina-manfredas-vocal",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F188456227&show_artwork=true\"></iframe>"
  },
  "Calibre": {
    "description": "Northern Irish drum and bass producer (Dominick Martin) celebrated for a soulful, liquid-funk sound across a huge back catalogue; held a sold-out residency at XOYO and released the FabricLive.68 mix compilation.",
    "soundcloudUrl": "https://soundcloud.com/fabric/fabriclive-68-calibre-30",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F83060817&show_artwork=true\"></iframe>"
  },
  "Call Super": {
    "description": "London-based producer and DJ (Joseph Seaton) whose textured, boundary-pushing sound shaped albums like \"Suzi Ecto\" and \"Arpo\", earning acclaim from The Guardian and DJ Mag as one of electronic music's most distinctive voices.",
    "soundcloudUrl": "https://soundcloud.com/call-super/ra435",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F173175553&show_artwork=true\"></iframe>"
  },
  "Cameron Cullen": {
    "description": "Scottish producer, also known under the alias DJ Posture, recognised for exploratory mixes spanning Japanese new age and ambient sound, including a widely praised set recorded at My Analog Journal's London studio.",
    "soundcloudUrl": "https://soundcloud.com/thelotradio/cameron-cullen-the-lot-radio-10-30-2022",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1373688922&show_artwork=true\"></iframe>"
  },
  "Carl H": {
    "description": "UK DJ and producer behind the record label Animals On Psychedelics, with a track record of hypnotic sets at festivals including Dimensions and collaborations with artists like Jane Fitz.",
    "soundcloudUrl": "https://soundcloud.com/dimensionsfestival/dim283-carl-h",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1489809325&show_artwork=true\"></iframe>"
  },
  "CCL": {
    "description": "Berlin-based DJ, producer and visual artist whose genre-hopping sets move through steppers, techno, house and drum and bass; their mix \"Ode to the Queer Steppas\" was named among Resident Advisor's best mixes of the decade.",
    "soundcloudUrl": "https://soundcloud.com/dpleated/hnypot-289-ccls-ode-to-the-queer-steppas",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F522767733&show_artwork=true\"></iframe>"
  },
  "Cedric Woo": {
    "description": "London DJ known as captain of the cult psychedelic soul party Beauty & The Beat, mixing soul, jazz, Afro-Cuban, Latin, funk, cosmic and dub influences across his club sets and radio shows.",
    "soundcloudUrl": "https://soundcloud.com/platform/cedric-woo-boiler-room-london-dj-set",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F349433310&show_artwork=true\"></iframe>"
  },
  "Channel One": {
    "description": "Legendary London reggae and dub sound system founded in 1979 by brothers Mikey Dread and Jah T, famed for hand-built speaker stacks, conscious roots selections and a 2010 Red Bull Culture Clash win.",
    "soundcloudUrl": "https://soundcloud.com/platform/channel-one-boiler-room-x-notting-hill-carnival-2017-dj-set",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F341865181&show_artwork=true\"></iframe>"
  },
  "Chez De Milo": {
    "description": "Bristol-based DJ and producer blending cosmic, hypnotic house and psychedelic world grooves; founder of Club Blanco and long-running host of Magic Carpet Ride on Noods Radio, with festival bookings spanning Glastonbury and Houghton.",
    "soundcloudUrl": "https://soundcloud.com/chezdemilo/magic-carpet-ride-21",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1552659493&show_artwork=true\"></iframe>"
  },
  "Chida": {
    "description": "Longstanding pioneer of Tokyo's underground house scene since the early 1990s, revered for marathon DJ sets and name-checked by artists like Andrew Weatherall; runs the Ene label for limited-edition releases.",
    "soundcloudUrl": "https://soundcloud.com/platform/chida",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F162102880&show_artwork=true\"></iframe>"
  },
  "Chris Sullivan": {
    "description": "London nightlife veteran who ran the Wag Club in Soho for almost two decades and was a central figure of the early-80s Blitz/New Romantic scene; DJ, author and style commentator with roots in the Blue Rondo a la Turk era.",
    "soundcloudUrl": "https://soundcloud.com/chris-sullivan-3/wag-live-mix-1",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F192477808&show_artwork=true\"></iframe>"
  },
  "Coast 2 Coast (The Ghost & Gene on Earth)": {
    "description": "A B2B pairing of Berlin duo The Ghost, founders of the city's first mobile record shop, with Gene on Earth, boss of the Limousine Dream label. Together they roam three decades of house, techno and leftfield sounds with a playful, crate-digging touch.",
    "soundcloudUrl": "https://soundcloud.com/wildeburg/coast-2-coast-gene-on-earth-the-ghost-wildeburg-2024",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F2052586088&show_artwork=true\"></iframe>"
  },
  "Colleen Cosmo Murphy": {
    "description": "American-born, London-based DJ, radio host and dedicated audiophile. Founder of Classic Album Sundays and host of Cosmodelica, she was mentored by Loft founder David Mancuso and is known for vinyl-only sets steeped in disco and soulful house.",
    "soundcloudUrl": "https://soundcloud.com/music-from-memory/mfm-mix-045-colleen-cosmo-murphy",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1388923768&show_artwork=true\"></iframe>"
  },
  "Craig Richards": {
    "description": "Houghton Festival's founder and curator, and one of UK dance music's most respected selectors. A founding Fabric resident who played well over 700 Saturday sets across 18 years, he's equally known as a record collector, producer and visual artist.",
    "soundcloudUrl": "https://soundcloud.com/resident-advisor/ra554-craig-richards",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F301648040&show_artwork=true\"></iframe>"
  },
  "Dan Andrei": {
    "description": "Romanian DJ and producer linked to the Sunwaves festival scene, known for layered, hypnotic minimal and microhouse grooves. A regular selector at underground parties and radio shows across Europe's electronic music circuit.",
    "soundcloudUrl": "https://soundcloud.com/xlr8r/xlr8r-mix-download-dan-andrei-live-from-sunwaves-april-2022",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1330641316&show_artwork=true\"></iframe>"
  },
  "Dan Beaumont": {
    "description": "A cornerstone of London nightlife who founded Dalston Superstore, Dance Tunnel and Voodoo Ray's. Also a well-travelled DJ and decade-long NTS resident, he's behind long-running parties like Chapter 10 and plays genre-spanning sets from Panorama Bar to Fabric.",
    "soundcloudUrl": "https://soundcloud.com/the-ransom-note/dan-beaumont-wes-baggaley-the-ransom-note-mix",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F486785985&show_artwork=true\"></iframe>"
  },
  "Danny Daze": {
    "description": "Miami-raised, Cuban-American producer and DJ (born Daniel Gomez) who rose from DMC battle roots to become a defining voice in underground house and techno, best known for the Hot Creations-signed track \"Your Everything\" and a BBC Radio 1 Essential Mix.",
    "soundcloudUrl": "https://soundcloud.com/dannydaze/danny-daze-essential-mix-7-20",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F101852908&show_artwork=true\"></iframe>"
  },
  "Dave Harvey": {
    "description": "Bristol-based co-founder of Futureboogie Recordings and a driving force behind Love International, Love Saves the Day and Glastonbury's Silver Hayes area. DJing since the 90s, he moves easily between house, techno, breaks and disco-tinged oddities.",
    "soundcloudUrl": "https://soundcloud.com/loveintfestival/harvey-love-international-mix",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F641278875&show_artwork=true\"></iframe>"
  },
  "Desyn": {
    "description": "British house and techno DJ/producer (Desyn Masiello) who broke through via a self-made mix CD in 1999 and was tipped as a rising star by the likes of Deep Dish and Danny Howells. He has recorded BBC Essential Mixes and mixed for the Balance and Bedrock series.",
    "soundcloudUrl": "https://soundcloud.com/trommelmusic/trommel-227-desyn",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F2165074572&show_artwork=true\"></iframe>"
  },
  "Dj Himitsu": {
    "description": "Tokyo-born, London-based producer and vinyl digger who founded Caravan Records and its Hackney record shop. His productions fold acid house basslines together with obscure sampled recordings into hypnotic, textured tracks.",
    "soundcloudUrl": "https://soundcloud.com/the-ransom-note/premiere-dj-himitsu-acid-three-lunatic-music",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1605081738&show_artwork=true\"></iframe>"
  },
  "DJ Masda": {
    "description": "Japan-born, Berlin-based selector and co-founder of the Cabaret Recordings label. A vinyl obsessive since the 90s, his tightly-woven sets thread early techno, futurist electro and playful house together for outlets like Dimensions and Resident Advisor.",
    "soundcloudUrl": "https://soundcloud.com/resident-advisor/ra454-dj-masda",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F237647048&show_artwork=true\"></iframe>"
  },
  "DJ Nature": {
    "description": "Bristol-born, New York-based house and disco selector (real name Milo Johnson) shaped by the city's Larry Levan-era club scene. His rough-edged, melodic productions have drawn comparisons to Moodymann and Larry Heard.",
    "soundcloudUrl": "https://soundcloud.com/resident-advisor/ra328-dj-nature",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F237975482&show_artwork=true\"></iframe>"
  },
  "DJRUM": {
    "description": "London producer Felix Manuel, celebrated for genre-blurring work that spans jazz, techno, UK garage, ambient and dubstep. He released the acclaimed debut album Seven Lies in 2013 and has continued exploring intricate, emotive productions since.",
    "soundcloudUrl": "https://soundcloud.com/resident-advisor/ra307-djrum",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F236812164&show_artwork=true\"></iframe>"
  },
  "Doc Martin": {
    "description": "Pioneering San Francisco house DJ/producer active since 1986, known for epic eight-hour sets and residencies at Metropolis, the Roxy, Twilo and the Tunnel. A foundational figure in West Coast house, prized for his deep and eclectic style.",
    "soundcloudUrl": "https://soundcloud.com/platform/doc-martin-60-min-boiler-room",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F113215885&show_artwork=true\"></iframe>"
  },
  "Dominic Capello": {
    "description": "A Glasgow institution who has held down the Saturday Subculture residency at Sub Club alongside James Harrigan since 1994. Three decades of fearless, genre-spanning selection covering disco, house, electro and techno in that famous basement.",
    "soundcloudUrl": "https://soundcloud.com/the-ransom-note/domenic-dapello-the-ransom-note-mix",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F493290489&show_artwork=true\"></iframe>"
  },
  "Donna Leake": {
    "description": "London-based DJ tied to the Brilliant Corners record shop scene and an NTS resident, celebrated for sets that glide through jazz, afrobeat, disco and global rarities with an easygoing, crate-digger's sensibility.",
    "soundcloudUrl": "https://soundcloud.com/platform/donna-leake",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F300756206&show_artwork=true\"></iframe>"
  },
  "Double Agent 7": {
    "description": "A London vinyl-only DJ duo spinning 1950s blues and '60s R&B/soul on 7-inch 45s exclusively, with residencies including The Ned and Ridley Road Market Bar. They also record original material as d.a.7 for Bona Fido Records.",
    "soundcloudUrl": "https://soundcloud.com/doubleagent7",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"450\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Fusers%2F4422346&show_artwork=true\"></iframe>"
  },
  "Dr Banana": {
    "description": "Bristol-based UK garage revivalist, DJ and label owner (real name Sandy Hagenbach) who grew up going to forest free parties. Now a key figure reissuing lost garage gems and championing new producers through his own eponymous label.",
    "soundcloudUrl": "https://soundcloud.com/dimensionsfestival/dim204-dr-banana",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F799936819&show_artwork=true\"></iframe>"
  },
  "Dresden": {
    "description": "A collaborative alias for Ivan Smagghe and Manfredas, veteran selectors known individually for genre-roaming DJ work; together as Dresden they lean into tech house with warped electro and dub textures, and made their Glastonbury 'San Remo' debut in 2025.",
    "soundcloudUrl": "https://soundcloud.com/dresden-dance/last-dresden-recording-at",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F2296382660&show_artwork=true\"></iframe>"
  },
  "Electro Elvis": {
    "description": "UK-based DJ, VJ and self-styled techno tinkerer, and a founding resident of London's long-running WANG parties, where his sets and visuals mix disco, electro and techno with playful showmanship.",
    "soundcloudUrl": "https://soundcloud.com/electro-elvis",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"450\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Fusers%2F590776&show_artwork=true\"></iframe>"
  },
  "Eliphino": {
    "description": "Stage name of Tom Wrankmore, a Leeds-raised, London-based producer and DJ whose sets and productions weave together hip-hop, garage, house, dancehall and jungle; released on Gilles Peterson's Brownswood Electric.",
    "soundcloudUrl": "https://soundcloud.com/platform/eliphino",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F150724943&show_artwork=true\"></iframe>"
  },
  "Ellie Stokes": {
    "description": "Bristol DJ and co-runner of The Love Inn, tied to Noods Radio, KLS and Love International festival; her sets range wide across cosmic, tribal and groove-led selections, showcased on her own 'Get Stoked' radio series.",
    "soundcloudUrl": "https://soundcloud.com/loveintfestival/love-international-mix-025-ellie-stokes",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F799877266&show_artwork=true\"></iframe>"
  },
  "Enrica Falqui": {
    "description": "Sardinian-born, Berlin-based DJ and producer moving fluidly between techno, house, electro and ambient; released the solo EP 'Plexus' on Marginal Returns and records as one half of the duo ERIS alongside Dea Dvornik.",
    "soundcloudUrl": "https://soundcloud.com/enricafalqui",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"450\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Fusers%2F175023&show_artwork=true\"></iframe>"
  },
  "E/Tape": {
    "description": "Amsterdam-based DJ and producer (also recording as Crinkhoff and Stëfän Dänīëls) who has risen through the Dutch house and techno underground since the early 2020s, playing venues including Shelter Amsterdam and the Wildeburg festival with deep, groove-driven sets.",
    "soundcloudUrl": "https://soundcloud.com/etape-amsterdam",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"450\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Fusers%2F1111632574&show_artwork=true\"></iframe>"
  },
  "Facta & K-Lone": {
    "description": "London's Facta and Bristol's K-LONE co-run the Wisdom Teeth label, blending New Age-inflected ambient textures with loopy tech house and the swung, dubby rhythms associated with Bristol's club sound.",
    "soundcloudUrl": "https://soundcloud.com/resident-advisor/ra908-facta-k-lone",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1651573215&show_artwork=true\"></iframe>"
  },
  "Fadi Mohem": {
    "description": "Berlin-raised techno producer and Berghain resident since 2022, known for a bold, propulsive sound with releases via Modeselektor's Seilscheibenpfeiler and Ben Klock's Klockworks; also works at the city's Hard Wax record shop.",
    "soundcloudUrl": "https://soundcloud.com/resident-advisor/ra842-fadi-mohem",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1310019976&show_artwork=true\"></iframe>"
  },
  "Felix Dickinson": {
    "description": "Three-decade veteran of the UK's underground dance scene, cutting his teeth at free parties before co-founding 90s label Ugly Music; now a regular at Glastonbury's Block9, Love International and Houghton itself.",
    "soundcloudUrl": "https://soundcloud.com/felix-dickinson",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"450\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Fusers%2F147092&show_artwork=true\"></iframe>"
  },
  "Freakenstein": {
    "description": "A UK scene veteran operating under a playful techno-funk alias, mixing funk-fuelled energy into propulsive dancefloor sets, including a Boiler Room broadcast from Plymouth's Hanging Gardens.",
    "soundcloudUrl": "https://soundcloud.com/platform/freakenstein-loud",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F747655594&show_artwork=true\"></iframe>"
  },
  "Gabrielle Kwarteng": {
    "description": "Brooklyn-born, Berlin-based DJ (performs as Gabrielle Kwarteng) whose eclectic sets range from house to Afrobeat and Jersey club, with radio residencies across NTS, Refuge Worldwide and The Lot Radio.",
    "soundcloudUrl": "https://soundcloud.com/resident-advisor/ra837-gabrielle-kwarteng-20221606",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1289498989&show_artwork=true\"></iframe>"
  },
  "Gene on Earth": {
    "description": "Berlin-based producer who first cut his teeth under the alias Yooj before turning to sun-soaked, groove-forward house as Gene on Earth, releasing albums via his own Limousine Dream label.",
    "soundcloudUrl": "https://soundcloud.com/resident-advisor/ra721-gene-on-earth",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F781427488&show_artwork=true\"></iframe>"
  },
  "Gideon": {
    "description": "London DJ, vinyl collector and Block9 co-founder who has curated Glastonbury's queer NYC Downlow party for close to two decades, spinning deep house, disco, soul and rare groove since 1990.",
    "soundcloudUrl": "https://soundcloud.com/gideon_dj_official/gideon-live-at-nyc-downlow-2025",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F2201541815&show_artwork=true\"></iframe>"
  },
  "Grace Sands": {
    "description": "Nottingham DIY Soundsystem founding member (formerly known as Digs of Digs & Woosh), now a queer-identified deep house DJ and producer, resident at London and Glastonbury's ADONIS and NYC Downlow parties.",
    "soundcloudUrl": "https://soundcloud.com/gracesands",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"450\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Fusers%2F76353690&show_artwork=true\"></iframe>"
  },
  "H Foundation (HIPP-E & Halo)": {
    "description": "A San Diego-based house and tech-house duo formed by Eric Galaviz (Hipp-E) and Brian Varga (Halo), celebrated for dub-inflected productions and a landmark residency at London's fabric that helped bridge American house with UK club culture.",
    "soundcloudUrl": "https://soundcloud.com/hipp-e",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"450\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Fusers%2F246538338&show_artwork=true\"></iframe>"
  },
  "Hackney Electronica": {
    "description": "London trio formed during lockdown by Quinn Whalley of Paranoid London, producer Unai Trotti of Cartulis Music, and engineer/musician Margo Broom. Their debut EP Synaptic Shadows, released on Dark Entries, channels acidic, rave-inflected electro and hypnotic breakbeats born from late-night studio sessions.",
    "soundcloudUrl": "https://soundcloud.com/darkentriesrecords/hackney-electronica-synaptic-shadows-clips",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F2058886340&show_artwork=true\"></iframe>"
  },
  "Hamish & Toby": {
    "description": "A Leeds-formed UK DJ duo known for long, genre-roaming sets that weave decades of unpredictable dance music into one unmistakable flow, with regular appearances at festivals including Glastonbury, Dimensions and Houghton.",
    "soundcloudUrl": "https://soundcloud.com/houghton-festival/recorded-at-houghton-hamish-toby-2023",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1653344166&show_artwork=true\"></iframe>"
  },
  "Harri Pepper": {
    "description": "A Welsh-born, Bristol-based selector raised in his family's jazz cafe and mentored early on by local label Piff Records, now a Rinse FM resident known for bass-heavy, groove-driven house sets.",
    "soundcloudUrl": "https://soundcloud.com/rinsefm/harri-pepper-04-august-2024",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1889340525&show_artwork=true\"></iframe>"
  },
  "Harry McCanna": {
    "description": "A London DJ and producer, also recording as Henry Hyde, and co-founder of NorthSouth Records, established as a fabric resident known for deep, textured sets spanning warm-up to peak time.",
    "soundcloudUrl": "https://soundcloud.com/fabric/024-harry-mccanna-recorded-live-from-fabric",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F2103585966&show_artwork=true\"></iframe>"
  },
  "Helena Hauff": {
    "description": "A Hamburg-born DJ and producer who cut her teeth at the city's Golden Pudel Club, now internationally renowned for raw, all-analogue electro and techno, and the first woman named BBC Radio 1's Essential Mix of the Year.",
    "soundcloudUrl": "https://soundcloud.com/resident-advisor/ra373-helena-hauff",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F236960594&show_artwork=true\"></iframe>"
  },
  "Itchy Rich": {
    "description": "A London house and disco selector whose mixes and club nights lean into a playful, cosmic-disco take on the dancefloor, favouring warm, groove-forward records over anything too serious.",
    "soundcloudUrl": "https://soundcloud.com/itchyrichmusic/itchy-rich-a-cosmic-disco-in-the-snow",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F255423096&show_artwork=true\"></iframe>"
  },
  "Ivan Smagghe": {
    "description": "A veteran French DJ and producer, formerly a Rough Trade Paris record store clerk, who co-founded the influential Kill the DJ club night and label and produced as part of Black Strobe; known for defiantly genre-crossing sets.",
    "soundcloudUrl": "https://soundcloud.com/resident-advisor/ra228-ivan-smagghe",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F236774015&show_artwork=true\"></iframe>"
  },
  "Jade Seatle": {
    "description": "A London selector best known as one half of the Night Moves party alongside Jane Fitz, playing deep, spacey and acid-tinged house and techno with careful, unhurried mixing.",
    "soundcloudUrl": "https://soundcloud.com/butter-side-up/bsu-069-jade-seatle",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1622148987&show_artwork=true\"></iframe>"
  },
  "Jane Fitz": {
    "description": "One of the UK's most respected underground DJs, with over 25 years behind the decks, resident at Freerotation and her own Night Moves party, moving between acid house, deep house and psychedelic techno.",
    "soundcloudUrl": "https://soundcloud.com/resident-advisor/ra477-jane-fitz",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F237808640&show_artwork=true\"></iframe>"
  },
  "John Talabot": {
    "description": "A Barcelona producer and DJ, real name Oriol Riverola, who left club residencies behind to craft a slow-burning, atmospheric house sound, best known for his acclaimed album 'Fin' and his Hivern Discs label.",
    "soundcloudUrl": "https://soundcloud.com/john-talabot",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"450\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Fusers%2F686904&show_artwork=true\"></iframe>"
  },
  "Jonny Rock": {
    "description": "A UK DJ and producer active since the mid-2000s, releasing across labels such as Fleeting Wax and Bahnsteig 23, and known for playful, wide-ranging sets that keep a party going from dusk till dawn.",
    "soundcloudUrl": "https://soundcloud.com/the-ransom-note/jonny-rock-the-ransom-note-mix",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F411075027&show_artwork=true\"></iframe>"
  },
  "Josh Caffé": {
    "description": "London DJ, vocalist and producer best known as the frontman of house-techno duo Paranoid London. Runs the Love Child party at Fabric and released his debut solo album Poppa Zesque on Erol Alkan's Phantasy label in 2023.",
    "soundcloudUrl": "https://soundcloud.com/josh-caffe/josh-caffe-do-you-wanna-take",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1211400265&show_artwork=true\"></iframe>"
  },
  "Josh T & Dr Banana": {
    "description": "A back-to-back set featuring Dr Banana, a UK selector and label boss whose deep knowledge of vintage UK garage, house and disco has made him a respected digger and Resident Advisor podcast contributor, alongside Josh T.",
    "soundcloudUrl": "https://soundcloud.com/resident-advisor/ra916-dr-banana",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1697180553&show_artwork=true\"></iframe>"
  },
  "Kay Suzuki": {
    "description": "A Japan-born, London-based producer and former Brilliant Corners co-founder, now running the reissue label Time Capsule and hosting eclectic, globally-minded shows on NTS and Worldwide FM.",
    "soundcloudUrl": "https://soundcloud.com/kay-suzuki",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"450\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Fusers%2F48992872&show_artwork=true\"></iframe>"
  },
  "Jake Manders": {
    "description": "A UK DJ and digger with ties to the Ransom Note scene, remembered for a rain-soaked, crowd-uniting set that became a highlight of a past Houghton Festival."
  },
  "Kia": {
    "description": "Melbourne-based DJ and producer, and founder of the Animalia label; her sets fuse hypnotic, dub-inflected techno with IDM and tech-house textures, drawing on the deep, psychedelic sound of Melbourne's underground scene.",
    "soundcloudUrl": "https://soundcloud.com/resident-advisor/ra-973-kia",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F2016240847&show_artwork=true\"></iframe>"
  },
  "Kian OK": {
    "description": "Manchester-born, London-based DJ known for eclectic, tempo-spanning sets with an experimental, psychedelic edge; co-founded South East London's Sunday Downtime, a series of DIY chillout listening sessions and takeovers.",
    "soundcloudUrl": "https://soundcloud.com/sundaydowntime/sunday-downtime-001-kian-ok",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1836837393&show_artwork=true\"></iframe>"
  },
  "Konduku": {
    "description": "Berlin-based producer (Ruben Uvez) and former De School resident whose leftfield, rhythm-led techno spans deep, hypnotic dancefloor cuts and broken-beat electronica; released on Nous'Klaer Audio and Idle Hands.",
    "soundcloudUrl": "https://soundcloud.com/resident-advisor/ra967-konduku",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1983300211&show_artwork=true\"></iframe>"
  },
  "Kyle Toole": {
    "description": "UK DJ and dedicated record collector, digging up rare vinyl and forgotten pressings that fuel genre-blurring, off-kilter house and minimal sets, alongside dreamier, more downtempo selections.",
    "soundcloudUrl": "https://soundcloud.com/kyletoole/spring-forward",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F2089819533&show_artwork=true\"></iframe>"
  },
  "Lakuti": {
    "description": "Soweto-born, Berlin-based DJ and label head, best known as founder of Kalahari Oyster Cult and a longtime Panorama Bar resident; her sets favour deep, soulful house and techno rooted in a broad musical upbringing.",
    "soundcloudUrl": "https://soundcloud.com/resident-advisor/ra603-lakuti",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F371122394&show_artwork=true\"></iframe>"
  },
  "Livwutang": {
    "description": "New York DJ (Liv Klutse) and Nowadays resident whose sets weave dubwise rhythms drawn from across the Black diaspora with an introspective, meditative energy, earned through years with Seattle's TUF collective and Orphan Radio.",
    "soundcloudUrl": "https://soundcloud.com/resident-advisor/ra975-livwutang",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F2028528732&show_artwork=true\"></iframe>"
  },
  "Lola Haro": {
    "description": "Brussels-based DJ who emerged from Belgium's record-digging underground in the late 2010s; her sets move through spectral techno, electro and leftfield obscurities, favouring mood and tension over strict genre lines.",
    "soundcloudUrl": "https://soundcloud.com/resident-advisor/ra-1037-lola-haro",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F2313388457&show_artwork=true\"></iframe>"
  },
  "Luke Una": {
    "description": "Manchester-via-Sheffield selector who, as one half of the Unabombers, built the cult Electric Chair night, and later founded Manchester's Homoelectric party and Homobloc festival; genre-roaming sets move through cosmic disco, jazz and deep house.",
    "soundcloudUrl": "https://soundcloud.com/houghton-festival/recorded-at-houghton-luke-una",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F2331846290&show_artwork=true\"></iframe>"
  },
  "Manasseh": {
    "description": "Nick Manasseh is a pioneering figure in UK dub and reggae, having founded the Manasseh Sound System in 1985 and hosted the influential Sound Iration show on Kiss FM, working alongside artists such as Jah Shaka and Aba Shanti-I.",
    "soundcloudUrl": "https://soundcloud.com/reggaeroast/rr-podcast-volume-34-nick-manasseh-guest-mix",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F343985601&show_artwork=true\"></iframe>"
  },
  "Manfredas": {
    "description": "Vilnius-based DJ and producer, and a key resident at the city's Opium Club, where he runs the Smala night; his sound blends cosmic disco, leftfield house and psychedelic touches, and he's a regular collaborator with Ivan Smagghe's Les Disques De La Mort.",
    "soundcloudUrl": "https://soundcloud.com/platform/manfredas",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F339435887&show_artwork=true\"></iframe>"
  },
  "Margaret Dygas": {
    "description": "Polish-born, Berlin-based DJ and producer, and a longtime Panorama Bar and Fabric regular; known for a refined, minimal microhouse sound, she has released sparingly but influentially on labels like Perlon.",
    "soundcloudUrl": "https://soundcloud.com/resident-advisor/ra-004-margaret-dygas",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F226602586&show_artwork=true\"></iframe>"
  },
  "Mariin": {
    "description": "Italian-born, London-based DJ and producer (Marinella Constestabile), a Pleasure Club resident who has become a fixture of the capital's scene; sets glide between electro, house and dubstep tempos with a sophisticated, forward-thinking touch.",
    "soundcloudUrl": "https://soundcloud.com/dimensionsfestival/dim305-mariiin",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1786407279&show_artwork=true\"></iframe>"
  },
  "Mark Ernestus": {
    "description": "Foundational figure in Berlin electronic music, co-founder of Basic Channel and Rhythm & Sound with Moritz von Oswald, and founder of the Hard Wax record shop that helped shape the city's early techno scene; widely credited as an originator of dub techno.",
    "soundcloudUrl": "https://soundcloud.com/resident-advisor/ra-1000-mark-ernestus",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F2151848808&show_artwork=true\"></iframe>"
  },
  "Mathew Jonson": {
    "description": "Vancouver-raised, now Lisbon-based minimal techno mainstay who trained in classical piano and jazz drumming before breaking through on Perlon, Kompakt and M_nus. Co-founder of the Wagon Repair label and a member of acclaimed live act Cobblestone Jazz, alongside solo albums including Agents of Time and Her Blurry Pictures.",
    "soundcloudUrl": "https://soundcloud.com/mathew-jonson/typerope",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F118974895&show_artwork=true\"></iframe>"
  },
  "Melchior Productions Ltd": {
    "description": "Best-known alias of Germany-based producer Thomas Melchior, closely tied to the Frankfurt/Berlin label Perlon across two decades in minimal and micro house. Records including No Disco Future and 2022's Vulnerabilities favour a stripped-back, textural sound that has made him one of the genre's steadiest voices.",
    "soundcloudUrl": "https://soundcloud.com/platform/tomas-melchoir",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F570491586&show_artwork=true\"></iframe>"
  },
  "Melina Serser": {
    "description": "Uruguayan-born DJ, based in Barcelona since 2019, whose downtempo, hypnotic sets draw on dub, trip-hop, ambient and global rhythms; also curated her own listening-session events, Hanuk and Irradia.",
    "soundcloudUrl": "https://soundcloud.com/resident-advisor/ra752-melina-serser-20201102",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F921991573&show_artwork=true\"></iframe>"
  },
  "Midland": {
    "description": "London-based DJ, producer and label owner whose 2016 Essential Mix was named Mix of the Year, followed by a widely acclaimed Fabriclive94 compilation; sets and productions move fluidly across house and techno.",
    "soundcloudUrl": "https://soundcloud.com/resident-advisor/ra396-midland",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F237102892&show_artwork=true\"></iframe>"
  },
  "Moxie": {
    "description": "London DJ and radio host who came up via pirate stations like Rinse FM before holding long-running residencies at BBC Radio 1 and NTS Radio; also lent her voice to Resident Advisor's video essays.",
    "soundcloudUrl": "https://soundcloud.com/resident-advisor/ra642-moxie-20180917",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F501065547&show_artwork=true\"></iframe>"
  },
  "MOY": {
    "description": "London-based electronic producer whose sound blends melancholic braindance, breakbeat-driven electro and cosmic acid house. Runs his own label, Dynamics of Acid Records, and hosts the Tangled Worlds show on Threads Radio, with releases across labels including Analogical Force and Batrachian.",
    "soundcloudUrl": "https://soundcloud.com/moy/808luv",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F2223163925&show_artwork=true\"></iframe>"
  },
  "Nicolas Lutz": {
    "description": "Berlin-based DJ and celebrated vinyl digger linked to Club der Visionaere and Toi Toi Musik, known for long, exploratory sets built from deep, often overlooked house, techno and electro.",
    "soundcloudUrl": "https://soundcloud.com/resident-advisor/nicolaslutz-houghton-25",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F2256954854&show_artwork=true\"></iframe>"
  },
  "Nicolas Matar": {
    "description": "French DJ who held a long-running residency at Ibiza's Pacha through the 1990s, playing deep, soulful and jazz-inflected house; now based between New York and Ibiza, still touring across deep house and disco-leaning club sounds.",
    "soundcloudUrl": "https://soundcloud.com/robot-heart/nicolas-matar-robot-heart-burning-man-2013",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F139010262&show_artwork=true\"></iframe>"
  },
  "Nidia": {
    "description": "Portuguese producer from Lisbon's Principe Discos label, fusing Angolan-rooted kuduro and batida rhythms with club and pop textures; has collaborated with Fever Ray, Kelela and Yaeji.",
    "soundcloudUrl": "https://soundcloud.com/resident-advisor/ra957-nidia",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1929726146&show_artwork=true\"></iframe>"
  },
  "O.Bee": {
    "description": "New York-based DJ trained in contemporary music, holding residencies at Fabric London, Club der Visionaere Berlin and Circoloco at DC-10 Ibiza; co-founded Jigit, a collective and label built around freewheeling, intellectually curious club sets.",
    "soundcloudUrl": "https://soundcloud.com/platform/obee",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F362066033&show_artwork=true\"></iframe>"
  },
  "Objekt": {
    "description": "TJ Hertz, a Berlin-based producer and DJ celebrated for intricate, technically precise techno and electro; formerly a part-time audio engineer at Native Instruments, known for widely shared, meticulously constructed long-form sets.",
    "soundcloudUrl": "https://soundcloud.com/resident-advisor/ra650-objekt",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F528543855&show_artwork=true\"></iframe>"
  },
  "Ogazon": {
    "description": "Vinyl-focused house DJ active on the Berlin circuit through nights like Coppi and Multisex, with guest mixes for Rinse FM, Dekmantel and Resident Advisor; plays with an old-school, groove-first approach to selecting records.",
    "soundcloudUrl": "https://soundcloud.com/rinsefm/ogazon190124",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1723645143&show_artwork=true\"></iframe>"
  },
  "OK Williams": {
    "description": "London-based NTS Radio resident whose sets range freely across bassy club tracks, synth-heavy house, techno, jungle and electro; a regular across the festival circuit, including Unsound, Horst and Draaimolen.",
    "soundcloudUrl": "https://soundcloud.com/resident-advisor/ra-1019-ok-williams",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F2234428070&show_artwork=true\"></iframe>"
  },
  "Oli Silva": {
    "description": "London DJ and producer, a longtime Lion & Lamb resident with a vinyl-first ethos, whose sound sits somewhere between spaced-out techno and cosmic disco; debuted on Craig Richards' The Nothing Special label.",
    "soundcloudUrl": "https://soundcloud.com/olisilva",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"450\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Fusers%2F60726&show_artwork=true\"></iframe>"
  },
  "Om Unit": {
    "description": "Producer recording as Om Unit since 2010, weaving jungle, drum & bass, footwork, hardcore and hip-hop into a distinctive bass-music sound; originally from London, now based in Bristol.",
    "soundcloudUrl": "https://soundcloud.com/resident-advisor/ra393-om-unit",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F237093907&show_artwork=true\"></iframe>"
  },
  "Optimo": {
    "description": "Glasgow duo Keith McIvor (JD Twitch) and Jonnie Wilkes (JG Wilkes), founders of the genre-hopping Sub Club night Optimo (Espacio), which ran weekly for over a decade and reshaped expectations of what a club night could sound like.",
    "soundcloudUrl": "https://soundcloud.com/resident-advisor/jd-twitch-optimo-sub-club-in-residence-mix",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F283002372&show_artwork=true\"></iframe>"
  },
  "Paquita Gordon": {
    "description": "Italian DJ and vinyl advocate, co-founder of the AV-Netwerk collective spanning London, Berlin and Venice; known for eclectic, record-collection-driven sets that roam from outsider disco to leftfield electronics.",
    "soundcloudUrl": "https://soundcloud.com/resident-advisor/ra639-paquita-gordon",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F491282007&show_artwork=true\"></iframe>"
  },
  "Paramida": {
    "description": "Berlin-based DJ of Persian-German heritage, a Panorama Bar resident and founder of the Love on the Rocks label, whose sets glide between house and trance; held a BBC Radio 1 residency and was named to the BBC's 100 Women list.",
    "soundcloudUrl": "https://soundcloud.com/resident-advisor/ra723-paramida-20200406",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F791955853&show_artwork=true\"></iframe>"
  },
  "Pariah": {
    "description": "Arthur Cayzer, a British producer based in Amsterdam and co-founder of the Voam label, known for atmospheric, bass-heavy techno as well as his ferocious improvised live project Karenn, made with longtime collaborator Blawan.",
    "soundcloudUrl": "https://soundcloud.com/fabric/pariah-fabric-promo-mix-june",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F97565221&show_artwork=true\"></iframe>"
  },
  "Peach": {
    "description": "Canadian-born, London-based DJ and NTS Radio host known for genre-fluid sets spanning house, tech house, tribal rhythms and ambient techno; became Leeds club Wire's first-ever resident in 2020.",
    "soundcloudUrl": "https://soundcloud.com/resident-advisor/ra762-peach762",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F963426928&show_artwork=true\"></iframe>"
  },
  "Peter Adjaye": {
    "description": "Ghanaian-British sound artist, composer and DJ-producer also known as AJ Kwame, with an academic background in mathematics and engineering; co-founded early-1990s trip-hop outfit R.P.M. and later scored soundscapes for architectural and gallery installations.",
    "soundcloudUrl": "https://soundcloud.com/musicforarchitecture/darkest-light-for-dialogues-a-vinylfactory-musicforarchitecture-by-peter-adjaye",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F263370180&show_artwork=true\"></iframe>"
  },
  "Peverelist": {
    "description": "Bristol producer and DJ who founded Punch Drunk Records and later co-founded Livity Sound in 2011, becoming a key architect of the city's underground dance scene. Threads together techno, dub, jungle, garage and grime into a spacious, soundsystem-rooted style across two decades of releases.",
    "soundcloudUrl": "https://soundcloud.com/peverelist/bluez-classic-mix",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F519575688&show_artwork=true\"></iframe>"
  },
  "Phil Smart": {
    "description": "Veteran Australian DJ voted the country's DJ of the Year in 2000 and twice listed in DJ Magazine's world Top 100; long associated with Sydney's Tweekin residency and the Think and Thunk record labels.",
    "soundcloudUrl": "https://soundcloud.com/philsmart/phil-smart-jon-williams-downsize",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F181124997&show_artwork=true\"></iframe>"
  },
  "Powder": {
    "description": "Moko Shibata, a Japanese DJ and producer originally from Nagasaki, now based in Tokyo, known for richly melodic, detail-heavy dance tracks; founded the Thinner Groove label and radio show in 2019.",
    "soundcloudUrl": "https://soundcloud.com/thinner_groove/yeastmix20200327",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F784290286&show_artwork=true\"></iframe>"
  },
  "Sonja Moonear": {
    "description": "Swiss (Geneva) DJ, producer and composer who emerged from the Weetamix crew in the early 2000s; classically-trained, fluid style runs through releases on Perlon and her own Ruta5 label, and she co-runs the Kiss Me festival.",
    "soundcloudUrl": "https://soundcloud.com/resident-advisor/ra520-sonja-moonear",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F264354812&show_artwork=true\"></iframe>"
  },
  "Ste Roberts": {
    "description": "UK producer and co-founder of the Hypercolour label (plus its Glass Table and Losing Suki offshoots); DJ sets and productions favour warm, rolling house grooves drawn from years of vinyl digging.",
    "soundcloudUrl": "https://soundcloud.com/djmag/exclusive-dj-mag-mix-ste-roberts",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F42023198&show_artwork=true\"></iframe>"
  },
  "Studio Batsumi": {
    "description": "London-based DJ duo of Marta and Fede, Italian expats and fixtures of the capital's underground scene since 2010, known for eclectic, crate-digging sets that fuse organic instrumentation with electronic rhythm.",
    "soundcloudUrl": "https://soundcloud.com/studiobatsumi/netil-radio-8-insenses-w-studio-batsumi",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F2111943006&show_artwork=true\"></iframe>"
  },
  "Sugar Free": {
    "description": "Madrid-born, Berlin-based DJ prized for genre-hopping sets that veer through Italo, hi-NRG, electro and house with a sci-fi, slightly sleazy edge; famously private, she lets her record selections do the talking.",
    "soundcloudUrl": "https://soundcloud.com/resident-advisor/ra927-sugar-free",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1770227742&show_artwork=true\"></iframe>"
  },
  "Tama Sumo": {
    "description": "Long-serving Panorama Bar/Berghain resident since 2004, having first cut her teeth at Tresor in the 1990s; sets roam across house, techno, disco and Afrobeat, with releases on Ostgut Ton.",
    "soundcloudUrl": "https://soundcloud.com/dkmntl/dekmantel-mix-497-lakuti-tama-sumo",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F2183331115&show_artwork=true\"></iframe>"
  },
  "The Ghost": {
    "description": "Berlin/London DJ duo Josh Tweek and James Creed, who started out running a mobile record shop from a van before building a label and party series around deep vinyl digging in house and techno.",
    "soundcloudUrl": "https://soundcloud.com/dimensionsfestival/dim159-the-ghost",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F571513629&show_artwork=true\"></iframe>"
  },
  "Tikiman": {
    "description": "Stage name of Paul St Hilaire, the Dominica-born vocalist whose plaintive, dub-inflected voice helped define Rhythm & Sound's Berlin dub-techno sound, with decades of solo and collaborative releases since.",
    "soundcloudUrl": "https://soundcloud.com/kuboraum/paul-st-hilaire-aka-tikiman-ice",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F2190624483&show_artwork=true\"></iframe>"
  },
  "Time is Away": {
    "description": "London duo Jack Rollo and Elaine Tierney, long-running NTS Radio residents whose broadcasts weave spoken word, field recordings and eclectic music into atmospheric radio essays, also releasing compilations via A Colourful Storm.",
    "soundcloudUrl": "https://soundcloud.com/phonicarecords/off-the-record-mix-series-47-time-is-away",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1846575777&show_artwork=true\"></iframe>"
  },
  "Tomas Station": {
    "description": "Bogota-born DJ and Can You Jigit co-founder, a New York Resolute-affiliated selector known for hypnotic, groove-heavy sets that fold cumbia and Latin American rhythm into house and minimal.",
    "soundcloudUrl": "https://soundcloud.com/trommelmusic/tomas-station-trommel-insession-104",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1554401398&show_artwork=true\"></iframe>"
  },
  "Tristan Da Cunha": {
    "description": "Veteran UK house DJ and serious vinyl collector, a fixture of Leeds' Back to Basics club for around two decades, also known for the Dungeon Meat project alongside Brawther.",
    "soundcloudUrl": "https://soundcloud.com/slapfunk-records/tristan-da-cunha-slapcast046",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F659769914&show_artwork=true\"></iframe>"
  },
  "Unai Trotti": {
    "description": "London-based, Bilbao-born DJ and founder of the Cartulis label and party, playing punchy vinyl-only sets of tough electro and techno built around more than 15 years of community-driven curation.",
    "soundcloudUrl": "https://soundcloud.com/resident-advisor/ra-1017-unai-trotti",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F2228513735&show_artwork=true\"></iframe>"
  },
  "Vera": {
    "description": "Berlin-based German DJ and producer, raised in Heidelberg with roots in early-90s techno, and a long-time Robert Johnson club resident known for intuitive, record-collection-driven sets and releases on Perlon.",
    "soundcloudUrl": "https://soundcloud.com/veragoesdeep/vera-the-lot-radio-hosted-by-basic-moves",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1824212451&show_artwork=true\"></iframe>"
  },
  "Vlada": {
    "description": "Moscow-born, Berlin-based DJ raised on jazz and classical piano before turning to vinyl digging; an Arma17 club resident and Volks party co-founder known for hypnotic, long-mixing techno and tech house.",
    "soundcloudUrl": "https://soundcloud.com/resident-advisor/ra742-vlada-20200824",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F881121382&show_artwork=true\"></iframe>"
  },
  "Willow": {
    "description": "Manchester-born, London-based house producer who broke through after Move D championed her track \"Feel Me\" at Gottwood, leading to its release on Workshop Records; formerly a resident at Nottingham's 808.",
    "soundcloudUrl": "https://soundcloud.com/resident-advisor/ra569-willow",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F319210466&show_artwork=true\"></iframe>"
  },
  "XDB": {
    "description": "Berlin-based German DJ/producer Kosta Athanassiadis, active since the early '90s and a mainstay of the minimal house and techno underground, with releases on Dial, Metrolux and Echocord.",
    "soundcloudUrl": "https://soundcloud.com/resident-advisor/ra-1003-xdb",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F2165293161&show_artwork=true\"></iframe>"
  },
  "Z@P": {
    "description": "Uruguayan house producer who debuted on Cabaret Recordings, known for warm, swinging and melodic selections that draw equally on classic and contemporary house music.",
    "soundcloudUrl": "https://soundcloud.com/resident-advisor/ra755-zp",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F934490488&show_artwork=true\"></iframe>"
  },
  "Truth & Lies": {
    "description": "Event-curation and DJ project of Justin Turford (Ex-Friendly) and Joff Casciani, Nottingham-rooted champions of global and leftfield sound who have curated stages at Houghton Festival since its 2017 launch."
  },
  "Wayne Holland": {
    "description": "London DJ and Not an Animal Records resident at the Lion & Lamb, a regular at Berlin's Renate and a familiar face on UK festival lineups including Gottwood, Love International and Houghton."
  },
  "Prince Fatty, Horseman, Liam Bailey, Ignition High Power & Mr Williamz": {
    "description": "Prince Fatty (Mike Pelanconi) is a London dub and reggae producer known for warm, analogue mixing in the King Tubby tradition; here he fronts a full soundsystem show alongside singer Horseman, vocalists Liam Bailey and Mr Williamz, and the Ignition High Power crew.",
    "soundcloudUrl": "https://soundcloud.com/mrbongo/prince-fatty-supersize-launch",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F75997522&show_artwork=true\"></iframe>"
  },
  "Prosumer": {
    "description": "German DJ from Saarbrucken who became a beloved Panorama Bar resident after moving to Berlin, celebrated for genre-spanning, feel-good house sets built on deep record knowledge rather than big-name hype.",
    "soundcloudUrl": "https://soundcloud.com/fabric/prosumer-fabric-79-radio-mix",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F218753633&show_artwork=true\"></iframe>"
  },
  "Quest": {
    "description": "Vancouver-based live techno project drawing on multiple eras of North American electronic music, blending old-school and contemporary influences into energetic, hardware-driven live sets, including a memorable past Houghton appearance.",
    "soundcloudUrl": "https://soundcloud.com/houghton-festival/recorded-at-houghton-quest-2024",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1968402011&show_artwork=true\"></iframe>"
  },
  "Radioactive Man": {
    "description": "The solo alias of British producer Keith Tenniswood, formerly one half of Two Lone Swordsmen with Andrew Weatherall, known for gritty, sub-heavy electro-techno released through his own Control Tower label.",
    "soundcloudUrl": "https://soundcloud.com/fabric/premier-radioactive-man-ism-schism-asking-for-trouble",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F316983524&show_artwork=true\"></iframe>"
  },
  "Raresh": {
    "description": "Romanian DJ from Bacau and co-founder of the influential [a:rpia:r] label alongside Rhadoo and Petre Inspirescu, a key architect of the hypnotic, groove-driven 'Rominimal' sound mentored by Ricardo Villalobos.",
    "soundcloudUrl": "https://soundcloud.com/fabric/raresh-fabric-78-promo-mix",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F173181516&show_artwork=true\"></iframe>"
  },
  "Renata": {
    "description": "Beirut-based DJ and producer Renata Sabella, a core member of the Frequent Defect crew since the mid-2010s, known for exploratory, beat-driven sets that helped shape Lebanon's underground electronic scene.",
    "soundcloudUrl": "https://soundcloud.com/foldldn/unfold-lvii-renata-live-recording",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1826806314&show_artwork=true\"></iframe>"
  },
  "Reptant": {
    "description": "Melbourne producer Lou Karsh's acid, electro and techno alias, built around a hardware 303 and known for conceptual, genre-blurring records and sought-after vinyl releases played at Berghain and Boiler Room.",
    "soundcloudUrl": "https://soundcloud.com/houghton-festival/recorded-at-houghton-reptant-live-2025",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F2230014164&show_artwork=true\"></iframe>"
  },
  "Rhadoo": {
    "description": "Bucharest-born DJ and producer Radu Cilinca, one of Romania's earliest house and techno selectors, whose deep, dub-inflected sets and [a:rpia:r] label helped define the minimal 'Rominimal' movement.",
    "soundcloudUrl": "https://soundcloud.com/rominimalcollective/rominimalcast042-rhadoo",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1671069027&show_artwork=true\"></iframe>"
  },
  "RHYW": {
    "description": "Berlin-based Welsh-Greek producer Alex Tsiridis, formerly of duo Cassegrain, now co-running the Fever AM label and Rinse FM show with Mor Elian, splicing broken beat, electro and techno into unpredictable sets.",
    "soundcloudUrl": "https://soundcloud.com/rhyw/rhyw-at-nowadays-may-2023-dj-set",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1561911418&show_artwork=true\"></iframe>"
  },
  "Ricardo Villalobos": {
    "description": "Chilean-German producer widely regarded as one of minimal techno's defining figures, famed for hypnotic, endlessly detailed marathon sets and landmark albums like Alcachofa that reshaped what a dancefloor mix could be.",
    "soundcloudUrl": "https://soundcloud.com/robert-tofan-427162601/ricardo-villalobos-fabric-36-full-mix",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1327414723&show_artwork=true\"></iframe>"
  },
  "Rob Mello": {
    "description": "Long-serving London house DJ and producer active since the late 1980s, co-founder of the Luxury Service label, who scored the cult film Human Traffic with Matthew Herbert and keeps disco-rooted house alive.",
    "soundcloudUrl": "https://soundcloud.com/fabric/deadbeat-disco-vs-rob-mello",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F142672996&show_artwork=true\"></iframe>"
  },
  "Roman Flugel": {
    "description": "Veteran Frankfurt producer who has recorded under aliases including Alter Ego and Eight Miles High, co-running the Playhouse and Ongaku labels and remixing artists from Daft Punk to Kylie Minogue.",
    "soundcloudUrl": "https://soundcloud.com/roman-flugel-essential-mix/roman-flugel-essential-mix-2015-12-12",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F237210060&show_artwork=true\"></iframe>"
  },
  "Saoirse": {
    "description": "Dublin-born, London-based DJ known for deep crate-digging and technically sharp, energetic sets, part of the S.A.S.S. back-to-back collective alongside Shanti Celeste, Moxie and Peach.",
    "soundcloudUrl": "https://soundcloud.com/resident-advisor/ra577-saoirse",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F328973074&show_artwork=true\"></iframe>"
  },
  "Scott Pelloux": {
    "description": "East London DJ and record collector tied to the Vinyl Delivery Service shop, spinning eclectic sets that roam across jazz, ambient, funk and electronic music on radio shows like dublab and Netil Radio.",
    "soundcloudUrl": "https://soundcloud.com/netil-radio/vinyl-delivery-service-w-scott-pelloux-19th-april-2024",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1852997964&show_artwork=true\"></iframe>"
  },
  "Sedef Adasi": {
    "description": "Turkish-born, Augsburg-based DJ and producer who became a Berghain/Panorama Bar resident, blending blissed-out house with acid, trance and electro, and founder of the community-minded HAMAM Nights parties.",
    "soundcloudUrl": "https://soundcloud.com/fabric/fabric-mix-by-sedef-adasi-with-intro",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1271244556&show_artwork=true\"></iframe>"
  },
  "Shanti Celeste": {
    "description": "Chilean-born, Bristol-shaped DJ and producer, a central figure in the city's Idle Hands scene and co-head of Peach Discs, known for warm, melodic house with a cosmic, uplifting streak.",
    "soundcloudUrl": "https://soundcloud.com/shanticeleste/shanti-celeste-essential-mix-2018-12-08",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F625904337&show_artwork=true\"></iframe>"
  },
  "Shay Malt": {
    "description": "London DJ and driving force behind Adonis, the queer party and radio series that champions house and techno through a rotating cast of residents on outlets like Rinse FM and NTS.",
    "soundcloudUrl": "https://soundcloud.com/rinsefm/aptshaymalt290619",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F644173710&show_artwork=true\"></iframe>"
  },
  "Reda": {
    "description": "Algerian DJ active on Poland's underground scene, playing minimal, deep tech and acid house; a returning face at Houghton, having previously appeared on the festival's 2023 and 2025 lineups."
  },
  "5IVE": {
    "description": "Japan-based DJ (also recording as cos/mes and Mascaras) who has played clubs across Tokyo, Seoul and Berlin since his first RA-listed show in 2011; released collaborative EPs with Samo DJ on The Trilogy Tapes and Public Possession.",
    "soundcloudUrl": "https://soundcloud.com/loveintfestival/live-from-the-adriatic-2022-powder-5ive",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1441603723&show_artwork=true\"></iframe>"
  },
  "Adi": {
    "description": "Colombian-born, Germany-based DJ and producer (real name Adi Purplepitch) who released his debut album via Brussels label Basic Moves; plays a slinky, electro-leaning style of house across Bogota, Brussels, Berlin and London.",
    "soundcloudUrl": "https://soundcloud.com/adipurplepitch",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"450\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Fusers%2F48855816&show_artwork=true\"></iframe>"
  },
  "Dr Horn": {
    "description": "UK DJ who learned his trade at early-90s free parties and has held residencies at Ibiza's Aura, Barcelona's Beetroot and Berlin's Farbfernseher, plus a yearly guest slot at Houghton itself; plays eclectic sets spanning funk, disco, hip-hop and house, and also produces as Smitten.",
    "soundcloudUrl": "https://soundcloud.com/dr-horn/dr-horn-housey-business",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F2278275134&show_artwork=true\"></iframe>"
  },
  "Francesco Del Garda": {
    "description": "Italian DJ and producer, born 1978, who discovered electronic music at 16 and blends funk, techno and groovy house with a strong vinyl ethos; runs the Timeless label since 2017 and has recorded mixes at Frankfurt's Robert Johnson.",
    "soundcloudUrl": "https://soundcloud.com/dimensionsfestival/francesco-del-garda-live-dimesions-2022",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1519601665&show_artwork=true\"></iframe>"
  },
  "Gabriel Rai": {
    "description": "London-based DJ known for deep, headsy vinyl sets rooted in the capital's underground house scene, showcased on shows like OpenLab Radio's 'The Tent at the End of the Universe'.",
    "soundcloudUrl": "https://soundcloud.com/openlabradio/the-tent-at-the-end-of-the-universe-21-gabriel-rai",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F2099602863&show_artwork=true\"></iframe>"
  },
  "Jenny Jen": {
    "description": "UK DJ who plays regularly across the festival circuit, including Love International and a yearly Houghton slot, with a genre-roaming, dancefloor-focused style.",
    "soundcloudUrl": "https://soundcloud.com/jennyjen",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"450\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Fusers%2F520592&show_artwork=true\"></iframe>"
  },
  "Maybe Laura": {
    "description": "London-based DJ (Laurita Klov) who hosts the monthly 'Maybe?' show on Netil Radio, playing eclectic, groove-led sets across the city's party circuit.",
    "soundcloudUrl": "https://soundcloud.com/maybelauramaybe",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"450\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Fusers%2F26673809&show_artwork=true\"></iframe>"
  },
  "Chez Damier": {
    "description": "Chicago-born house pioneer Chez Damier (Anthony Pearson), who co-founded Prescription Records with Ron Trent and helped build Detroit's Music Institute alongside Derrick May, remaining a foundational figure in deep house.",
    "soundcloudUrl": "https://soundcloud.com/chez-damier/can-you-feel-it-extended-mix",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F2206184947&show_artwork=true\"></iframe>"
  },
  "Christian AB": {
    "description": "British-born, Berlin-based DJ and producer Christian Browne, who built a cult IYKYK following through deep, hard-to-find 90s house records discovered on the London afterparty circuit, releasing on labels like Faith Beat.",
    "soundcloudUrl": "https://soundcloud.com/resident-advisor/ra-1046-christian-ab",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F2339275214&show_artwork=true\"></iframe>"
  },
  "Decius": {
    "description": "UK collaborative project fronted by Luke May and formed by members of Trashmouth Records, Fat White Family and Paranoid London, playing a punk-inflected, edits-heavy strain of acid disco as both a live show and DJ sets; regularly billed alongside Dresden and Ivan Smagghe.",
    "soundcloudUrl": "https://soundcloud.com/the-ransom-note/decius-the-wednesday-alternative-mix",
    "soundcloudEmbed": "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay; encrypted-media\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F964729504&show_artwork=true\"></iframe>"
  }
};

// Maps a data.js entry name to the profile name it should be grouped under in
// the Artists tab — e.g. the same DJ billed under a set-specific label at a
// different slot. This only affects Artists tab grouping; the timetable grid
// still shows each entry's own original label (that distinction is useful
// there — it isn't in a flat artist directory).
const ARTIST_ALIASES = {
  'Decius Live': 'Decius',
  'Craig Richards (Electro Set)': 'Craig Richards',
  'Craig Richards (Reggae Set)': 'Craig Richards',
  'Al Wootton (DJ Set)': 'Al Wootton',
  'Al Wootton (Live)': 'Al Wootton',
  'Aurora Halal (Live)': 'Aurora Halal',
  '.VRIL (Live)': '.VRIL',
  "Nik Bartsch's Ronin (Live)": 'Nik Bartsch',
  'Nik Bartsch (Solo Piano)': 'Nik Bartsch',
  // Both Friday Pinters billings are the same duo: the late live set and the
  // daytime ambient set that replaced MAGUIRE's solo slot.
  'Awkward Moments (Live)': 'Awkward Moments',
  'Awkward Moments (Ambient Live)': 'Awkward Moments',
  'C.A.R (Live)': 'C.A.R',
  'Danny Daze (A/V)': 'Danny Daze',
  'Deadbeat (DJ Set)': 'Deadbeat',
  'Deadbeat (Live)': 'Deadbeat',
  'Gideon (reggae set)': 'Gideon',
  'Greg Paulus (Live)': 'Greg Paulus',
  'Hackney Electronica (Live)': 'Hackney Electronica',
  'Jason Lindner (live keyboard sound)': 'Jason Lindner',
  'Josh Caffé (Live)': 'Josh Caffé',
  'Mathew Jonson (Live)': 'Mathew Jonson',
  'Melchior Productions Ltd (Live)': 'Melchior Productions Ltd',
  'Midland (Ambient Set)': 'Midland',
  'Moy (Live)': 'MOY',
  'Om Unit Presents Acid Dub Studies': 'Om Unit',
  'Paramida (Balearic Set)': 'Paramida',
  'Peach (R&B Set)': 'Peach',
  'Peter Adjaye (Live)': 'Peter Adjaye',
  'Peverelist (Live)': 'Peverelist',
  'Radioactive Man (Live)': 'Radioactive Man',
  'Radioactive Man (Reggae Set)': 'Radioactive Man',
  'Reptant (DJ Set)': 'Reptant',
  'Reptant (Live)': 'Reptant',
  'Simo Cell (Dub Set)': 'Simo Cell',
  'Simo Cell (Live)': 'Simo Cell',
  'Ste Roberts (Live)': 'Ste Roberts',
  'Truth & Lies (Ex-Friendly)': 'Truth & Lies',
  'Z@P (Live)': 'Z@P',
};

// data.js entries that are one grid slot shared by two separate touring
// artists playing back to back (as opposed to a single named collaborative
// act, like Facta & K-Lone or H Foundation) — these get split into two
// separate Artists tab profiles instead of one combined one. The grid keeps
// the combined billing.
const ARTIST_SPLITS = {
  'Amit & Aneesh': ['Amit', 'Aneesh'],
  'Baby Vulture & E/Tape': ['Baby Vulture', 'E/Tape'],
  'Cedric Woo & Belle Bête': ['Cedric Woo', 'Belle Bête'],
  'Claude & Krishan': ['Claude', 'Krishan'],
  'ETAPE and Baby Vulture': ['E/Tape', 'Baby Vulture'],
  'Hamish & Toby & XDB': ['Hamish & Toby', 'XDB'],
  'Howie B & Hiraki Sawa (live)': ['Howie B', 'Hiraki Sawa'],
  'Jane Fitz & Paquita Gordon': ['Jane Fitz', 'Paquita Gordon'],
  'Jason Lindner & Audio Currency': ['Jason Lindner', 'Audio Currency'],
  'Joff (Truth & Lies)': ['Joff', 'Truth & Lies'],
  'Kyle Toole & Kian OK': ['Kyle Toole', 'Kian OK'],
  'Mark Ernestus & Tikiman': ['Mark Ernestus', 'Tikiman'],
  'Mathew Jonson & .VRIL (Live)': ['Mathew Jonson', '.VRIL'],
  'Nidia & Valentina (Live)': ['Nidia', 'Valentina'],
  'O.Bee & Tomas Station': ['O.Bee', 'Tomas Station'],
  'Sha & James Gilligan (Live)': ['Sha', 'James Gilligan'],
  'Tama Sumo & Lakuti': ['Tama Sumo', 'Lakuti'],
  'Uncle Al & Sherman': ['Uncle Al', 'Sherman'],
};

// data.js entries that are workshops/events/activities, not artists — kept
// out of the Artists tab entirely rather than shown as a "profile".
const ARTIST_EXCLUDE = [
  'Flow and Gong with Lucia Jiminez & Julim',
  'Harry & Dan present Tea Dance',
  'Swing & Dine',
  'Breath to Uplift with GiGi',
  'Breathwork Breath to Restore',
  'Life Drawing with Sophia Shuvalova',
  'Morning Flow with Andy Kobelinsky',
  'Soundbath',
  'Soundbath with Michelle Cade',
  'Soundbath with Veronika',
  'Thai Massage workshop with Paul Brumwell',
  'TBC',
  'Yamuna Body Rolling',
  'Yamuna Body Rolling with Gemma Nash',
];
