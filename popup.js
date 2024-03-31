chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var tab = tabs[0];

    if(tab.url.split('/')[2] === 'summerofcode.withgoogle.com') {
        const orgName = tab.url.split('/')[6];
        const index = orgIndex[orgName];
        // document.getElementById('url').innerText = data[index];

        // {
        //     "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/4577761535983616",
        //     "name": "SymbiFlow",
        //     "tech": [
        //         "python",
        //         "c/c++",
        //         "verilog",
        //         "fpga"
        //     ],
        //     "cat": "",
        //     "top": [
        //         "programming languages",
        //         "development tools",
        //         "open hardware"
        //     ],
        //     "year": [
        //         2021,
        //         2020,
        //         2019
        //     ],
        //     "project": [
        //         0,
        //         0,
        //         0,
        //         0,
        //         0,
        //         0,
        //         0,
        //         0,
        //         0,
        //         0,
        //         1,
        //         3,
        //         1,
        //         0
        //     ]
        // },
        document.getElementById('url').innerText = data[index].name;
        for (let i = 0; i < data[index].project.length; i++) {
            if(data[index].project[i] !== 0) {
                const years = document.createElement('div');
                years.innerText = 2009+i + ' : ' + data[index].project[i];
                document.getElementById('years').appendChild(years);
            }
        }
    }else{
        document.getElementById('url').innerText = 'Please open the GSoC page';
    }
  });

const orgIndex = {
    "52°north-spatial-information-research-gmbh": 0,
    "aboutcode": 1,
    "aflplusplus": 2,
    "ankidroid": 3,
    "aossie": 4,
    "apache-software-foundation": 5,
    "ardupilot": 6,
    "audacity": 7,
    "beagleboard.org": 8,
    "blender-foundation": 9,
    "brl-cad": 10,
    "casbin": 11,
    "cbioportal-for-cancer-genomics": 12,
    "ccextractor-development": 13,
    "center-for-research-in-open-source-software-(cross)": 14,
    "center-for-translational-data-science": 15,
    "ceph": 16,
    "cern-hsf": 17,
    "cgal-project": 18,
    "chaoss": 19,
    "checkstyle": 210,
    "chips-alliance": 21,
    "chromium": 22,
    "circuitverseorg": 23,
    "cncf": 24,
    "coreboot": 25,
    "criu": 26,
    "cuneiform-digital-library-initiative-(cdli)": 27,
    "dart": 28,
    "dbpedia": 29,
    "debian": 30,
    "department-of-biomedical-informatics,-emory-university": 31,
    "django-software-foundation": 32,
    "drupal-association": 33,
    "eclipse-foundation": 34,
    "electron": 35,
    "ffmpeg": 36,
    "flashrom": 37,
    "forschungszentrum-jülich": 38,
    "fortran-lang": 39,
    "fossology": 40,
    "free-and-open-source-silicon-foundation": 41,
    "freetype": 42,
    "freifunk": 406,
    "frrouting": 44,
    "genome-assembly-and-annotation": 45,
    "gentoo-foundation": 46,
    "geomscale": 47,
    "git": 48,
    "gitlab": 49,
    "global-alliance-for-genomics-and-health": 50,
    "gnome-foundation": 51,
    "gnss-sdr": 443,
    "gnu-compiler-collection-(gcc)": 53,
    "gnu-image-manipulation-program": 54,
    "gnu-octave": 55,
    "gnu-radio": 56,
    "godot-engine": 57,
    "grame": 58,
    "haiku": 59,
    "haskellorg": 323,
    "homebrew": 61,
    "incf": 62,
    "inkscape": 63,
    "intel-video-and-audio-for-linux": 64,
    "international-catrobat-association": 65,
    "internet-health-report": 66,
    "ioos": 67,
    "jabref-e.v.": 68,
    "jboss-community": 69,
    "jderobot": 70,
    "jenkins": 71,
    "jenkins-x": 72,
    "jitsi": 73,
    "joomla!": 74,
    "joplin": 75,
    "kart-project": 76,
    "kde-community": 77,
    "keptn": 78,
    "kodi": 79,
    "leap-encryption-access-project": 80,
    "learning-equality": 81,
    "libcamera": 82,
    "librecube-initiative": 83,
    "librehealth": 84,
    "libreoffice": 85,
    "libssh": 86,
    "libvirt": 329,
    "liquid-galaxy-project": 411,
    "llvm-compiler-infrastructure": 89,
    "machine-learning-for-science-(ml4sci)": 90,
    "mariadb": 91,
    "mathesar": 92,
    "matrixorg": 93,
    "mayor's-office-of-new-urban-mechanics": 94,
    "mbdyn": 95,
    "mdanalysis": 96,
    "metabrainz-foundation-inc": 97,
    "metacall": 98,
    "metasploit": 99,
    "micro-electronics-research-lab---uitu": 100,
    "mit-app-inventor": 101,
    "mixxx": 102,
    "mlpack": 103,
    "moja-global": 104,
    "monado": 105,
    "moveit": 106,
    "musescore": 107,
    "mzmine": 108,
    "national-resource-for-network-biology-(nrnb)": 109,
    "neutralinojs": 110,
    "numfocus": 111,
    "omegaup": 112,
    "open-bioinformatics-foundation-(obf)": 113,
    "open-chemistry": 114,
    "open-food-facts": 115,
    "open-genome-informatics": 116,
    "open-robotics": 117,
    "open-technologies-alliance---gfoss": 118,
    "open3d-team": 119,
    "openafs": 120,
    "openastronomy": 239,
    "opencv": 122,
    "openmrs": 123,
    "openstreetmap": 124,
    "opensuse-project": 125,
    "openvino-toolkit": 126,
    "openwisp": 127,
    "oppia-foundation": 128,
    "orcasound": 129,
    "organic-maps": 130,
    "osgeo-(open-source-geospatial-foundation)": 131,
    "our-world-in-data": 132,
    "owasp-foundation": 133,
    "pecan-project": 134,
    "performance-co-pilot": 135,
    "plone-foundation": 136,
    "polypheny": 137,
    "postgresql": 138,
    "powerdns": 139,
    "processing-foundation": 140,
    "public-lab": 141,
    "purr-data": 142,
    "python-software-foundation": 143,
    "qemu": 144,
    "r-project-for-statistical-computing": 145,
    "radar-base": 146,
    "red-hen-lab": 147,
    "responsible-ai-and-human-centred-technology": 148,
    "rizin": 149,
    "robocomp": 459,
    "robolectric": 151,
    "rocketchat": 251,
    "rtems-project": 153,
    "ruby": 154,
    "sagemath": 155,
    "scala-center": 156,
    "score-lab": 157,
    "scummvm": 158,
    "seaql": 159,
    "semi-technologies": 160,
    "sktime": 161,
    "society-for-arts-and-technology-(sat)": 162,
    "software-heritage": 163,
    "spdx": 164,
    "stellar-group": 165,
    "strace": 166,
    "submitty": 167,
    "sugar-labs": 168,
    "swift": 169,
    "sympy": 170,
    "synfig": 171,
    "syslog-ng": 172,
    "tarantool": 173,
    "tardis-rt-collaboration": 174,
    "tensorflow": 175,
    "the-enigma-team": 176,
    "the-freebsd-project": 177,
    "the-honeynet-project": 178,
    "the-jpf-team": 179,
    "the-julia-language": 180,
    "the-libreswan-project": 181,
    "the-linux-foundation": 182,
    "the-mifos-initiative": 183,
    "the-netbsd-foundation": 184,
    "the-ns-3-network-simulator-project": 185,
    "the-palisadoes-foundation": 186,
    "the-tor-project": 187,
    "tianocore": 188,
    "unikraft": 189,
    "videolan": 190,
    "wagtail": 191,
    "wellcome-sanger-tree-of-life": 192,
    "wikimedia-foundation": 193,
    "xorg-foundation": 396,
    "xfce": 195,
    "xmpp-standards-foundation": 196,
    "xwiki": 197,
    "zulip": 198,
    "52°north-gmbh": 199,
    "accord-project": 200,
    "aerospaceresearch.net": 201,
    "android-graphics-tools-team": 202,
    "apertium": 203,
    "apertus°-association": 204,
    "bench-routes": 205,
    "boost-c++-libraries": 206,
    "camicroscope": 207,
    "castor": 208,
    "chapel": 209,
    "cilium": 211,
    "civicrm-llc": 212,
    "cloudcv": 213,
    "coala": 214,
    "continuous-delivery-foundation": 215,
    "deeppavlov": 216,
    "digital-impact-alliance-(dial)-at-un-foundation": 217,
    "elm-tooling": 218,
    "framenet-brasil-(ufjf)": 219,
    "gnu-mailman-project": 220,
    "google-fhir-sdk": 221,
    "gprmax": 222,
    "grr-rapid-response": 223,
    "gvisor": 224,
    "halide": 225,
    "hydra-ecosystem": 226,
    "internet-archive": 227,
    "java-pathfinder": 228,
    "kiwix": 229,
    "lablua": 230,
    "libre-space-foundation": 231,
    "mapaction": 232,
    "media-cloud": 233,
    "mediapipe": 234,
    "mggg-redistricting-lab": 235,
    "mypy": 236,
    "navidrome": 237,
    "open-roberta": 238,
    "openmined": 240,
    "pharo-consortium": 241,
    "pidgin-instant-messenger": 242,
    "pitivi": 243,
    "plan-9-foundation": 244,
    "point-cloud-library": 245,
    "postman": 246,
    "project-wikiloop": 247,
    "qubes-os": 248,
    "react-native-elements": 249,
    "reactos": 250,
    "samba": 252,
    "shaka-player": 253,
    "symbiflow": 254,
    "the-terasology-foundation": 255,
    "vitrivr": 256,
    "xiph.org-foundation": 257,
    "xrdesktop": 258,
    "52-north-gmbh": 259,
    "academy-software-foundation-(aswf)": 260,
    "afl++": 261,
    "amahi": 262,
    "anitaborg-open-source": 263,
    "appleseed": 264,
    "arduino": 265,
    "biogears": 266,
    "canadian-centre-for-computational-genomics": 267,
    "catrobat": 268,
    "checker-framework": 269,
    "cloud-native-computing-foundation-(cncf)": 270,
    "creative-commons": 271,
    "drupal": 272,
    "elastic": 273,
    "embox": 274,
    "erlang-ecosystem-foundation": 275,
    "fedora-project": 276,
    "gdevelop": 277,
    "gpac": 278,
    "graphql-foundation": 279,
    "hazelcast": 280,
    "inclusive-design-institute": 281,
    "kapitan": 282,
    "kubeflow": 283,
    "linkerd": 284,
    "lowrisc": 285,
    "macports": 286,
    "moira": 287,
    "mozilla": 288,
    "neovim": 289,
    "netty": 290,
    "nv-access": 291,
    "open-source-robotics-foundation": 292,
    "openemr": 293,
    "openhmd": 294,
    "openrefine": 295,
    "percona": 296,
    "shogun": 297,
    "the-gnu-project": 298,
    "the-wine-project": 299,
    "webpack": 300,
    "wireshark": 301,
    "xapian-search-engine-library": 302,
    "52north-initiative-for-geospatial-open-source-software-gmbh": 303,
    "aimacode": 304,
    "api-client-tools-at-google": 305,
    "bazel": 306,
    "berkman-klein-center-for-internet-and-society": 307,
    "biomedical-informatics,-emory-university": 308,
    "buildroot": 309,
    "cbmi@uthsc": 310,
    "clips,-university-of-antwerp": 311,
    "computational-biology-@-university-of-nebraska-lincoln": 312,
    "d-programming-language": 313,
    "developers-italia": 314,
    "earth-science-information-partners": 315,
    "fosdem": 316,
    "fossasia": 317,
    "framenet-brasil-at-the-federal-university-of-juiz-de-fora": 318,
    "genes,-genomes-and-variation": 319,
    "genivi-alliance": 320,
    "gnu-compiler-collection": 321,
    "gnu-mailman": 322,
    "institut-für-angewandte-informatik-(infai)-e.v.": 324,
    "intermine": 325,
    "internet-systems-consortium": 326,
    "jsk-robotics-laboratory-/-the-university-of-tokyo": 327,
    "knime": 328,
    "luarocks": 330,
    "moodle": 331,
    "named-data-networking-project": 332,
    "netfilter-project": 333,
    "open-astronomy": 334,
    "open-data-kit": 335,
    "phpmyadmin": 336,
    "project-panoptes": 337,
    "read-the-docs": 338,
    "ruby-science-foundation": 339,
    "salesforce": 340,
    "shogun.ml": 341,
    "software-and-computational-systems-lab-at-lmu-munich": 342,
    "the-center-for-connected-learning-and-computer-based-modeling": 343,
    "the-perl-foundation": 344,
    "the-postgres-operator": 345,
    "the-vega-project-at-the-university-of-washington": 346,
    "tokio": 347,
    "tungsten-fabric": 348,
    "ucsc-xena": 349,
    "xi-editor": 350,
    "xpra": 351,
    "zynaddsubfx": 352,
    "3dtk": 353,
    "52°-north-initiative-for-geospatial-open-source-software-gmbh": 354,
    "beam-community": 355,
    "beeware-project": 356,
    "boston-university-/-xia": 357,
    "classical-language-toolkit": 358,
    "conversations.im": 359,
    "eta": 360,
    "free-uk-genealogy": 361,
    "grpc": 362,
    "inria-foundation": 363,
    "institute-for-artificial-intelligence": 364,
    "jgrapht": 365,
    "languagetool.org": 366,
    "mobile-robot-programming-toolkit-(mrpt)": 367,
    "movingblocks": 368,
    "open-states": 369,
    "opencensus": 370,
    "opensips": 371,
    "opntec": 372,
    "ow2": 373,
    "p2psp.org": 374,
    "phpbb-forum-software": 375,
    "pmd": 376,
    "pocket-science-lab": 377,
    "polly-labs": 378,
    "probot": 379,
    "python-hydra": 380,
    "quill.org": 381,
    "rspamd": 382,
    "ruby-on-rails": 383,
    "scilab": 384,
    "seastar": 385,
    "space-@-virginia-tech": 386,
    "stemformatics": 387,
    "stony-brook-university-biomedical-informatics": 388,
    "streetmix": 389,
    "systers-community": 390,
    "teammates-@-national-university-of-singapore": 391,
    "the-qt-project": 392,
    "tla+": 393,
    "visp": 394,
    "worldbrain.io---verifying-the-internet": 395,
    "xbmc-foundation": 397,
    "babel": 398,
    "cadasta": 399,
    "clojure": 400,
    "cmu-sphinx": 401,
    "copyleft-games": 402,
    "discourse": 403,
    "eclipse-vert.x": 404,
    "environmental-data-and-governance-initiative": 405,
    "frescobaldi": 407,
    "green-navigation": 408,
    "illumos.org": 409,
    "k-9-mail": 410,
    "microkernel-devroom": 412,
    "mono-project": 413,
    "nmap-security-scanner": 414,
    "open-detection": 415,
    "ovirt": 416,
    "owncloud": 417,
    "physical-web-project": 418,
    "portland-state-university": 419,
    "shogun-machine-learning-toolbox": 420,
    "sigmah": 421,
    "tiled": 422,
    "timvideos": 423,
    "urban-energy-systems-laboratory,-empa": 424,
    "wso2": 425,
    "wxwidgets": 426,
    "xen-project": 427,
    "zenodo": 428,
    "archc": 429,
    "ascend": 430,
    "biojs": 431,
    "buildmlearn": 432,
    "celluloid": 433,
    "computational-science-and-engineering-at-tu-wien": 434,
    "cvxpy": 435,
    "d-foundation": 436,
    "dbpediaspotlight": 437,
    "distributed-and-unified-numerics-environment-(dune)": 438,
    "fosdem-vzw": 439,
    "gambit---software-tools-for-game-theory": 440,
    "ganeti": 441,
    "github": 442,
    "health-information-systems-programme": 444,
    "indic-project": 445,
    "international-neuroinformatics-coordinating-facility": 446,
    "jquery-foundation": 447,
    "kolibrios": 448,
    "mcgill-space-institute": 449,
    "mit-media-lab": 450,
    "modsecurity": 451,
    "open-ephys": 452,
    "openkeychain-(openpgp-for-android)": 453,
    "orange-–-data-mining-fruitful-&-fun": 454,
    "osu-open-source-lab": 455,
    "peragro": 456,
    "plasma-umass": 457,
    "prism-model-checker": 458,
    "soletta-project": 460,
    "the-monarch-initiative": 461,
    "timelab-technologies-ltd.": 462,
    "unitex/gramlab": 463,
    "vert.x": 464,
    "wayland": 465
  }


const data = [
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/52north-spatial-information-research-gmbh",
        "name": "52\u00b0North Spatial Information Research GmbH",
        "tech": [
            "javascript",
            "android",
            "java",
            "web services",
            "ogc standards"
        ],
        "cat": "",
        "top": [
            "citizen science",
            "spatial information infrastructures",
            "open standards",
            "data analytics",
            "Geoinformation"
        ],
        "year": [
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            5
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/aboutcode",
        "name": "AboutCode",
        "tech": [
            "python",
            "javascript",
            "Django+PostgreSQL",
            "C/Rust/Go",
            "postgresql",
            "c/c++",
            "rust"
        ],
        "cat": "",
        "top": [
            "dependencies",
            "vulnerabilities",
            "SoftwareCompositionAnalysis",
            "License",
            "SBOM",
            "machine learning",
            "software analysis",
            "application security",
            "license-scan"
        ],
        "year": [
            2017,
            2019,
            2020,
            2021,
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            4,
            0,
            3,
            5,
            4,
            5
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/aflplusplus",
        "name": "AFLplusplus",
        "tech": [
            "llvm",
            "rust",
            "fuzzing",
            "qemu"
        ],
        "cat": "",
        "top": [
            "fuzzing",
            "ci"
        ],
        "year": [
            2022,
            2021
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            1
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/ankidroid",
        "name": "AnkiDroid",
        "tech": [
            "android",
            "java",
            "rust",
            "kotlin",
            "mobile"
        ],
        "cat": "",
        "top": [
            "education",
            "mobile",
            "android",
            "user generated content",
            "Flashcards"
        ],
        "year": [
            2022,
            2021
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            3
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/aossie",
        "name": "AOSSIE",
        "tech": [
            "python",
            "javascript",
            "machine learning",
            "scala",
            "Blockchain",
            "android",
            "ios",
            "isabelle proof assistant",
            "postgresql",
            "llvm",
            "lisp"
        ],
        "cat": "",
        "top": [
            "machine learning",
            "electronic voting",
            "natural language processing",
            "social science",
            "environment",
            "philosophy",
            "privacy",
            "health",
            "logic",
            "live programming",
            "data analysis"
        ],
        "year": [
            2016,
            2017,
            2018,
            2019,
            2020,
            2021,
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            6,
            13,
            13,
            18,
            9,
            11,
            8
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/apache-software-foundation",
        "name": "Apache Software Foundation",
        "tech": [
            "c",
            "java",
            "c++",
            "rust"
        ],
        "cat": "",
        "top": [
            "big data",
            "cloud",
            "libraries",
            "other"
        ],
        "year": [
            2009,
            2010,
            2011,
            2012,
            2013,
            2014,
            2015,
            2016,
            2017,
            2018,
            2019,
            2020,
            2021,
            2022
        ],
        "project": [
            32,
            39,
            35,
            38,
            44,
            33,
            47,
            35,
            23,
            23,
            17,
            17,
            28,
            33
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/ardupilot",
        "name": "ArduPilot",
        "tech": [
            "python",
            "lua",
            "c++",
            "pixhawk",
            "linux",
            "c/c++",
            "drones",
            "robotics"
        ],
        "cat": "",
        "top": [
            "robotics",
            "Drone",
            "autonomous vehicle",
            "UGV",
            "unmanned vehicle",
            "embedded systems",
            "real-time os",
            "drones",
            "vison"
        ],
        "year": [
            2017,
            2018,
            2019,
            2020,
            2021,
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            5,
            5,
            5,
            3,
            4
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/audacity",
        "name": "Audacity",
        "tech": [
            "c++",
            "qt",
            "cmake",
            "wxwidgets",
            "VST"
        ],
        "cat": "",
        "top": [
            "audio",
            "editing",
            "compression",
            "Sound",
            "Effects"
        ],
        "year": [
            2022,
            2021,
            2009
        ],
        "project": [
            2,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            1
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/beagleboardorg",
        "name": "BeagleBoard.org",
        "tech": [
            "linux",
            "fpga",
            "risc-v",
            "dsp",
            "Zephyr RTOS",
            "arm"
        ],
        "cat": "",
        "top": [
            "robotics",
            "iot",
            "ai",
            "software defined radio",
            "Personal Server",
            "open hardware",
            "process automation"
        ],
        "year": [
            2010,
            2013,
            2014,
            2015,
            2016,
            2017,
            2018,
            2019,
            2020,
            2021,
            2022
        ],
        "project": [
            0,
            6,
            0,
            0,
            6,
            6,
            7,
            6,
            6,
            3,
            3,
            4,
            6,
            4
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/blender-foundation",
        "name": "Blender Foundation",
        "tech": [
            "c",
            "python",
            "opengl",
            "c++",
            "vulkan"
        ],
        "cat": "",
        "top": [
            "games",
            "graphics",
            "3d",
            "rendering",
            "animation"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2018,
            2017,
            2016,
            2014,
            2013,
            2012,
            2011,
            2010,
            2009
        ],
        "project": [
            6,
            10,
            15,
            13,
            12,
            7,
            0,
            8,
            5,
            5,
            7,
            9,
            8,
            3
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/brl-cad",
        "name": "BRL-CAD",
        "tech": [
            "python",
            "c/c++",
            "opengl",
            "opencl",
            "scripting"
        ],
        "cat": "",
        "top": [
            "geometry",
            "2d/3d graphics",
            "ray tracing",
            "high-performance computing",
            "conversion standards"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2018,
            2017,
            2016,
            2015,
            2014,
            2013,
            2012,
            2011,
            2009
        ],
        "project": [
            3,
            0,
            2,
            7,
            7,
            10,
            9,
            9,
            8,
            7,
            8,
            8,
            6,
            7
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/casbin",
        "name": "Casbin",
        "tech": [
            "javascript",
            "java",
            "go",
            "OIDC",
            "OAuth"
        ],
        "cat": "",
        "top": [
            "security",
            "cloud",
            "authorization",
            "IAM",
            "Authentication"
        ],
        "year": [
            2022,
            2021,
            2020
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            9,
            10
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/cbioportal-for-cancer-genomics",
        "name": "cBioPortal for Cancer Genomics",
        "tech": [
            "mysql",
            "javascript",
            "java",
            "react",
            "typescript"
        ],
        "cat": "",
        "top": [
            "genomics",
            "cancer",
            "bioinformatics",
            "big data",
            "precision medicine"
        ],
        "year": [
            2022,
            2019,
            2017,
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            5,
            6,
            0,
            6,
            0,
            0,
            2
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/ccextractor-development",
        "name": "CCExtractor Development",
        "tech": [
            "c",
            "linux",
            "rust",
            "flutter"
        ],
        "cat": "",
        "top": [
            "video",
            "subtitles",
            "mobile",
            "peer to peer"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2018,
            2017,
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            6,
            6,
            6,
            10,
            8,
            9,
            10
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/center-for-research-in-open-source-software-cross",
        "name": "Center for Research in Open Source Software (CROSS)",
        "tech": [
            "python",
            "c/c++",
            "verilog",
            "apache arrow",
            "matlab/simulink",
            "robotics",
            "c++17",
            "ceph",
            "arrow",
            "javascript",
            "c++",
            "hadoop"
        ],
        "cat": "",
        "top": [
            "hardware",
            "data science",
            "networking",
            "data management",
            "systems",
            "databases",
            "storage",
            "sensors",
            "callibration",
            "cloud databases",
            "reproducibility",
            "ceph",
            "architecture",
            "generative text",
            "big data",
            "distributed networks",
            "storage systems",
            "opendata"
        ],
        "year": [
            2018,
            2019,
            2021,
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            4,
            0,
            5,
            9
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/center-for-translational-data-science",
        "name": "Center for Translational Data Science",
        "tech": [
            "python",
            "aws"
        ],
        "cat": "",
        "top": [
            "bioinformatics",
            "data science",
            "cloud",
            "Data Meshes"
        ],
        "year": [
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/ceph",
        "name": "Ceph",
        "tech": [
            "python",
            "javascript",
            "c++",
            "c/c++",
            "shell script",
            "jenkins"
        ],
        "cat": "",
        "top": [
            "distributed systems",
            "Software-Defined-Storage",
            "software defined storage"
        ],
        "year": [
            2014,
            2016,
            2017,
            2020,
            2021,
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            4,
            4,
            0,
            0,
            4,
            7,
            1
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/cern-hsf",
        "name": "CERN-HSF",
        "tech": [
            "python",
            "c/c++",
            "data analysis",
            "artificial intelligence",
            "container orchestration",
            "javascript",
            "c++",
            "clang"
        ],
        "cat": "",
        "top": [
            "machine learning",
            "big data",
            "algorithmics",
            "particle physics",
            "Performance Optimisation",
            "cloud",
            "numerical and data analysis software",
            "simulation software"
        ],
        "year": [
            2012,
            2013,
            2014,
            2015,
            2016,
            2017,
            2018,
            2019,
            2020,
            2021,
            2022
        ],
        "project": [
            0,
            0,
            0,
            7,
            8,
            11,
            14,
            10,
            20,
            26,
            29,
            34,
            25,
            21
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/cgal-project",
        "name": "CGAL Project",
        "tech": [
            "c++",
            "qt",
            "python",
            "git",
            "swig",
            "github"
        ],
        "cat": "",
        "top": [
            "geometry",
            "mesh processing",
            "computation geometry",
            "geometry processing",
            "computational geometry",
            "arrangement",
            "point set processing",
            "triangulaton"
        ],
        "year": [
            2013,
            2017,
            2018,
            2019,
            2020,
            2021,
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            7,
            0,
            0,
            0,
            4,
            7,
            9,
            7,
            5,
            6
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/chaoss",
        "name": "CHAOSS",
        "tech": [
            "python",
            "postgresql",
            "javascript",
            "machine learning",
            "airflow",
            "elk",
            "vue",
            "nltk",
            "fossology",
            "python 3"
        ],
        "cat": "",
        "top": [
            "Diversity Equity and Inclusion",
            "open source software metrics",
            "software sustainability",
            "community building",
            "security and software bill of materials",
            "metrics",
            "community",
            "analytics",
            "dependencies",
            "diversity and inclusion",
            "visualization",
            "machine learning",
            "data visualization"
        ],
        "year": [
            2018,
            2019,
            2020,
            2021,
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            4,
            9,
            6,
            5
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/checkstyle",
        "name": "checkstyle",
        "tech": [
            "java",
            "antlr"
        ],
        "cat": "",
        "top": [
            "static code analysis\u200e",
            "code review tool",
            "coding standards",
            "coding conventions"
        ],
        "year": [
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/chips-alliance",
        "name": "CHIPS Alliance",
        "tech": [
            "fpga",
            "chisel",
            "risc-v",
            "systemverilog",
            "ASIC"
        ],
        "cat": "",
        "top": [
            "soc",
            "IP cores",
            "ASIC design",
            "HDL",
            "chiplets"
        ],
        "year": [
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/chromium-lj",
        "name": "Chromium",
        "tech": [
            "python",
            "javascript",
            "java",
            "c++",
            "git"
        ],
        "cat": "",
        "top": [
            "web",
            "browser",
            "operating-system"
        ],
        "year": [
            2022,
            2021,
            2013,
            2010,
            2009
        ],
        "project": [
            3,
            8,
            0,
            0,
            7,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            9,
            14
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/circuitverseorg",
        "name": "CircuitVerse.org",
        "tech": [
            "javascript",
            "rails",
            "canvas"
        ],
        "cat": "",
        "top": [
            "education",
            "web",
            "simulation",
            "pedagogy",
            "digital logic design"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            4,
            6,
            4
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/cncf",
        "name": "CNCF",
        "tech": [
            "prometheus",
            "kubernetes",
            "OpenTelemetry",
            "envoy"
        ],
        "cat": "",
        "top": [
            "cloud",
            "cloud native",
            "observability"
        ],
        "year": [
            2022,
            2021
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            16,
            16
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/coreboot",
        "name": "coreboot",
        "tech": [
            "c",
            "assembly",
            "arm",
            "x86"
        ],
        "cat": "",
        "top": [
            "hardware",
            "drivers",
            "firmware",
            "boot loader",
            "BIOS"
        ],
        "year": [
            2022,
            2020,
            2019,
            2016,
            2015,
            2014,
            2013,
            2011,
            2010,
            2009
        ],
        "project": [
            3,
            5,
            4,
            0,
            4,
            3,
            2,
            3,
            0,
            0,
            3,
            2,
            0,
            1
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/criu",
        "name": "CRIU",
        "tech": [
            "c",
            "python",
            "linux",
            "go",
            "docker",
            "containers",
            "kernel"
        ],
        "cat": "",
        "top": [
            "cloud",
            "containers",
            "Checkpoint/Restore",
            "save/restore",
            "load-balancing",
            "zero-downtime",
            "migration"
        ],
        "year": [
            2019,
            2020,
            2021,
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            3,
            3,
            2
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/cuneiform-digital-library-initiative-cdli",
        "name": "Cuneiform Digital Library Initiative (CDLI)",
        "tech": [
            "mysql",
            "javascript",
            "docker",
            "php",
            "SCSS",
            "python",
            "mariadb",
            "rdf",
            "nltk"
        ],
        "cat": "",
        "top": [
            "linguistics",
            "History",
            "culture",
            "natural language processing",
            "semantic web",
            "machine translation",
            "information retrieval"
        ],
        "year": [
            2018,
            2019,
            2020,
            2021,
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            5,
            9,
            7,
            7
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/dart",
        "name": "Dart",
        "tech": [
            "flutter",
            "dart"
        ],
        "cat": "",
        "top": [
            "programming languages",
            "mobile apps"
        ],
        "year": [
            2022,
            2021,
            2020
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            5,
            3,
            3
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/dbpedia",
        "name": "DBpedia",
        "tech": [
            "python",
            "javascript",
            "java",
            "scala",
            "rdf"
        ],
        "cat": "",
        "top": [
            "natural language processing",
            "semantic web",
            "linked data",
            "knowledge graph",
            "data extraction"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2018,
            2017
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            7,
            3,
            6,
            7,
            10,
            4
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/debian",
        "name": "Debian",
        "tech": [
            "c",
            "python",
            "java",
            "ruby",
            "perl",
            "javascript",
            "c/c++"
        ],
        "cat": "",
        "top": [
            "web",
            "robotics",
            "graphics",
            "cloud",
            "SDR",
            "community",
            "applications",
            "operating system",
            "communications",
            "packaging"
        ],
        "year": [
            2009,
            2010,
            2011,
            2013,
            2014,
            2015,
            2016,
            2018,
            2019,
            2020,
            2021,
            2022
        ],
        "project": [
            7,
            8,
            7,
            0,
            15,
            17,
            15,
            20,
            0,
            22,
            5,
            8,
            5,
            2
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/department-of-biomedical-informatics-emory-university",
        "name": "Department of Biomedical Informatics, Emory University",
        "tech": [
            "python",
            "javascript",
            "java",
            "workflows",
            "dicom",
            "tensorflow",
            "medical imaging",
            "deeplearning"
        ],
        "cat": "",
        "top": [
            "science and medicine",
            "data integration",
            "workflows",
            "radiology",
            "distributed system",
            "cloud",
            "distributed systems"
        ],
        "year": [
            2021,
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            6,
            8
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/django-software-foundation-8o",
        "name": "Django Software Foundation",
        "tech": [
            "python",
            "django"
        ],
        "cat": "",
        "top": [
            "web",
            "python"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2018,
            2017,
            2016,
            2014,
            2013,
            2012,
            2011,
            2010,
            2009
        ],
        "project": [
            6,
            2,
            3,
            1,
            3,
            2,
            0,
            1,
            0,
            0,
            2,
            2,
            4,
            2
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/drupal-association",
        "name": "Drupal Association",
        "tech": [
            "mysql",
            "javascript",
            "html",
            "php",
            "symfony"
        ],
        "cat": "",
        "top": [
            "web",
            "cloud",
            "DXP",
            "Massive community",
            "Inclusive"
        ],
        "year": [
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/eclipse-foundation",
        "name": "Eclipse Foundation",
        "tech": [
            "java",
            "che",
            "deeplearning",
            "eclipsejavaide",
            "jakartaee",
            "javascript",
            "jakarta",
            "openj9"
        ],
        "cat": "",
        "top": [
            "robotics",
            "automotive",
            "tools",
            "cloud native java",
            "iot & edge",
            "iot",
            "cloud",
            "ide"
        ],
        "year": [
            2009,
            2011,
            2012,
            2013,
            2014,
            2015,
            2016,
            2017,
            2018,
            2019,
            2020,
            2022
        ],
        "project": [
            19,
            0,
            16,
            11,
            11,
            16,
            15,
            11,
            10,
            7,
            10,
            7,
            0,
            5
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/electron",
        "name": "Electron",
        "tech": [
            "javascript",
            "node.js",
            "c++",
            "typescript",
            "Chromium"
        ],
        "cat": "",
        "top": [
            "desktop",
            "framework",
            "javascript"
        ],
        "year": [
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/ffmpeg",
        "name": "FFmpeg",
        "tech": [
            "c",
            "git",
            "asm"
        ],
        "cat": "",
        "top": [
            "audio",
            "video",
            "subtitles",
            "multimedia"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2018,
            2017,
            2016,
            2015,
            2010,
            2009
        ],
        "project": [
            6,
            7,
            0,
            0,
            0,
            0,
            7,
            7,
            6,
            5,
            6,
            5,
            5,
            2
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/flashrom",
        "name": "Flashrom",
        "tech": [
            "c",
            "x86",
            "bios",
            "rom",
            "spi"
        ],
        "cat": "",
        "top": [
            "hardware",
            "drivers",
            "firmware",
            "flash chips",
            "low level programming"
        ],
        "year": [
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/forschungszentrum-julich",
        "name": "Forschungszentrum J\u00fclich",
        "tech": [
            "python",
            "mpi",
            "high performance computing",
            "pytorch",
            "gpu"
        ],
        "cat": "",
        "top": [
            "neuroscience",
            "data analytics",
            "astrophysics",
            "data-intensive science",
            "earth-system monitoring"
        ],
        "year": [
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            4
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/fortran-lang",
        "name": "Fortran-lang",
        "tech": [
            "python",
            "c++",
            "fortran"
        ],
        "cat": "",
        "top": [
            "compilers",
            "programming languages",
            "build systems",
            "libraries",
            "Fortran"
        ],
        "year": [
            2022,
            2021
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            5,
            5
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/fossology",
        "name": "FOSSology",
        "tech": [
            "python",
            "postgresql",
            "c/c++",
            "php",
            "reactjs",
            "jquery",
            "bash"
        ],
        "cat": "",
        "top": [
            "automation",
            "spdx",
            "license compliance",
            "nlp",
            "compliance automation",
            "compliance",
            "license-scan",
            "oss licensing",
            "oss compliance"
        ],
        "year": [
            2018,
            2019,
            2020,
            2021,
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            3,
            3,
            7,
            6
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/free-and-open-source-silicon-foundation",
        "name": "Free and Open Source Silicon Foundation",
        "tech": [
            "verilog",
            "risc-v",
            "compiler",
            "web development"
        ],
        "cat": "",
        "top": [
            "hardware",
            "debug",
            "web services",
            "simulation",
            "electronic design tools"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2018,
            2017,
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            4,
            6,
            7,
            4,
            11,
            8
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/freetype",
        "name": "FreeType",
        "tech": [
            "c",
            "autotools",
            "meson",
            "fonts",
            "opentype",
            "library"
        ],
        "cat": "",
        "top": [
            "library",
            "rendering",
            "fonts",
            "opentype",
            "truetype",
            "graphics"
        ],
        "year": [
            2017,
            2018,
            2019,
            2020,
            2021,
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            3,
            3,
            3,
            1,
            2
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/freifunk",
        "name": "freifunk",
        "tech": [
            "c",
            "python",
            "javascript",
            "openwrt",
            "gnu/linux"
        ],
        "cat": "",
        "top": [
            "embedded systems",
            "open hardware",
            "routing",
            "wireless networks",
            "federation"
        ],
        "year": [
            2022,
            2021,
            2019,
            2018,
            2012,
            2011
        ],
        "project": [
            0,
            0,
            9,
            12,
            0,
            0,
            0,
            0,
            0,
            12,
            10,
            0,
            7,
            8
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/frrouting",
        "name": "FRRouting",
        "tech": [
            "c",
            "linux",
            "networking",
            "linux kernel",
            "routing"
        ],
        "cat": "",
        "top": [
            "networking",
            "software defined networking",
            "linux",
            "routing",
            "systems"
        ],
        "year": [
            2022,
            2021,
            2020
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            1,
            1
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/genome-assembly-and-annotation",
        "name": "Genome Assembly and Annotation",
        "tech": [
            "python",
            "mysql",
            "docker",
            "pytorch",
            "nextflow"
        ],
        "cat": "",
        "top": [
            "machine learning",
            "genomics",
            "big data",
            "cloud",
            "hpc"
        ],
        "year": [
            2022,
            2021
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            6
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/gentoo-foundation",
        "name": "Gentoo Foundation",
        "tech": [
            "c",
            "python",
            "shell",
            "linux",
            "bash"
        ],
        "cat": "",
        "top": [
            "operating systems",
            "security",
            "embedded",
            "init",
            "package"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2018,
            2017,
            2016,
            2014,
            2013,
            2012,
            2011,
            2010
        ],
        "project": [
            0,
            16,
            14,
            8,
            6,
            3,
            0,
            5,
            3,
            2,
            2,
            4,
            2,
            4
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/geomscale",
        "name": "GeomScale",
        "tech": [
            "python",
            "c++",
            "r",
            "jupyter",
            "github-actions"
        ],
        "cat": "",
        "top": [
            "mathematics",
            "data science",
            "computational biology",
            "computational geometry",
            "statistics"
        ],
        "year": [
            2022,
            2021,
            2020
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            5,
            6
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/git",
        "name": "Git",
        "tech": [
            "shell script",
            "git",
            "c language"
        ],
        "cat": "",
        "top": [
            "version control",
            "dvcs"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2018,
            2017,
            2016,
            2015,
            2014,
            2012,
            2011,
            2010
        ],
        "project": [
            0,
            3,
            5,
            3,
            0,
            2,
            2,
            1,
            1,
            3,
            2,
            3,
            2,
            2
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/gitlab",
        "name": "GitLab",
        "tech": [
            "javascript",
            "ruby on rails",
            "go",
            "ruby",
            "vue"
        ],
        "cat": "",
        "top": [
            "cloud",
            "devops"
        ],
        "year": [
            2022,
            2021
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            4,
            3
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/global-alliance-for-genomics-and-health",
        "name": "Global Alliance for Genomics and Health",
        "tech": [
            "python",
            "postgresql",
            "java",
            "react",
            "rust",
            "sql",
            "protobuf"
        ],
        "cat": "",
        "top": [
            "web",
            "genomics",
            "bioinformatics",
            "genetics",
            "standards",
            "big data",
            "apis",
            "data sharing"
        ],
        "year": [
            2015,
            2016,
            2017,
            2018,
            2019,
            2020,
            2021,
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            3,
            2,
            4,
            5,
            4,
            7,
            8
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/gnome-foundation",
        "name": "GNOME Foundation",
        "tech": [
            "c",
            "linux",
            "rust",
            "gtk",
            "Flatpak",
            "python",
            "vala"
        ],
        "cat": "",
        "top": [
            "operating systems",
            "desktop",
            "graphics",
            "open source",
            "apps",
            "games",
            "applications",
            "productivity"
        ],
        "year": [
            2009,
            2010,
            2012,
            2013,
            2014,
            2015,
            2016,
            2017,
            2018,
            2019,
            2020,
            2021,
            2022
        ],
        "project": [
            24,
            20,
            0,
            28,
            29,
            35,
            22,
            18,
            19,
            13,
            8,
            14,
            12,
            9
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/gnss-sdr",
        "name": "GNSS-SDR",
        "tech": [
            "c",
            "c++",
            "sdr"
        ],
        "cat": "",
        "top": [
            "gnss",
            "geolocation",
            "navigation",
            "software defined radio",
            "communications"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2018,
            2017,
            2015,
            2014,
            2013
        ],
        "project": [
            0,
            0,
            0,
            0,
            3,
            4,
            6,
            0,
            5,
            5,
            3,
            2,
            1,
            3
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/gnu-compiler-collection-gcc",
        "name": "GNU Compiler Collection (GCC)",
        "tech": [
            "c/c++",
            "gnu make",
            "gnu autotools"
        ],
        "cat": "",
        "top": [
            "compilers",
            "developer tools",
            "toolchain",
            "openmp",
            "link time optimization"
        ],
        "year": [
            2022,
            2021,
            2020,
            2018
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            2,
            3,
            3
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/gnu-image-manipulation-program",
        "name": "GNU Image Manipulation Program",
        "tech": [
            "c",
            "GEGL"
        ],
        "cat": "",
        "top": [
            "graphics",
            "design",
            "photography",
            "illustration"
        ],
        "year": [
            2022,
            2013,
            2011,
            2009
        ],
        "project": [
            6,
            0,
            5,
            0,
            3,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/gnu-octave",
        "name": "GNU Octave",
        "tech": [
            "c++",
            "hg"
        ],
        "cat": "",
        "top": [
            "mathematics",
            "scientific computing",
            "numerical computation",
            "numerical methods",
            "matlab"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2018,
            2017,
            2016,
            2014
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            3,
            0,
            5,
            4,
            3,
            0,
            1,
            1,
            3
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/gnu-radio",
        "name": "GNU Radio",
        "tech": [
            "python",
            "c++",
            "qt",
            "simd"
        ],
        "cat": "",
        "top": [
            "real-time",
            "dsp",
            "communications engineering",
            "cybersecurity",
            "Software-Defined Radio"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2018,
            2017,
            2016,
            2014,
            2013
        ],
        "project": [
            0,
            0,
            0,
            0,
            5,
            4,
            0,
            2,
            2,
            2,
            2,
            1,
            1,
            1
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/godot-engine",
        "name": "Godot Engine",
        "tech": [
            "opengl",
            "c++",
            "vulkan",
            "webassembly"
        ],
        "cat": "",
        "top": [
            "graphics",
            "cross-platform",
            "game engine",
            "game development",
            "programming"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2018
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            5,
            8,
            6,
            5,
            3
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/grame",
        "name": "GRAME",
        "tech": [
            "c",
            "python",
            "javascript",
            "c++",
            "typescript"
        ],
        "cat": "",
        "top": [
            "audio",
            "compiler",
            "digital signal processing",
            "function programming language"
        ],
        "year": [
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/haiku",
        "name": "Haiku",
        "tech": [
            "c++",
            "posix",
            "unix"
        ],
        "cat": "",
        "top": [
            "desktop",
            "kernel"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2018,
            2017,
            2014,
            2012,
            2011,
            2010,
            2009
        ],
        "project": [
            5,
            5,
            4,
            5,
            0,
            2,
            0,
            0,
            5,
            2,
            1,
            4,
            3,
            3
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/haskellorg",
        "name": "Haskell.org",
        "tech": [
            "haskell",
            "ghc"
        ],
        "cat": "",
        "top": [
            "compilers",
            "programming languages",
            "functional programming",
            "programming tools"
        ],
        "year": [
            2022,
            2021,
            2020,
            2018
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            15,
            0,
            12,
            10,
            10
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/homebrew",
        "name": "Homebrew",
        "tech": [
            "linux",
            "ruby",
            "macos"
        ],
        "cat": "",
        "top": [
            "linux",
            "package manager",
            "macos"
        ],
        "year": [
            2022,
            2020,
            2018,
            2017,
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            4,
            2,
            1,
            0,
            3,
            0,
            1
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/incf",
        "name": "INCF",
        "tech": [
            "python",
            "javascript",
            "java",
            "c++",
            "gpu"
        ],
        "cat": "",
        "top": [
            "machine learning",
            "data visualization",
            "neuroscience",
            "brain modelling",
            "neuroimage processing"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2018,
            2017
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            13,
            16,
            17,
            21,
            21,
            35
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/inkscape",
        "name": "Inkscape",
        "tech": [
            "python",
            "c++",
            "svg"
        ],
        "cat": "",
        "top": [
            "web",
            "graphics",
            "design"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2018,
            2017,
            2016,
            2014,
            2013,
            2012,
            2011,
            2010,
            2009
        ],
        "project": [
            4,
            2,
            3,
            3,
            5,
            2,
            0,
            2,
            2,
            0,
            1,
            3,
            6,
            3
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/intel-video-and-audio-for-linux",
        "name": "Intel Video and Audio for Linux",
        "tech": [
            "c/c++",
            "opengl",
            "Codec",
            "Media",
            "Imaging",
            "gstreamer",
            "ffmpeg",
            "sound open firmware",
            "libxcam",
            "vaapi",
            "video",
            "decode",
            "encode",
            "vpp",
            "multimedia"
        ],
        "cat": "",
        "top": [
            "media",
            "imaging",
            "Codec",
            "360 stereo video",
            "opensource audio firmware",
            "ffmpeg neuronetwork",
            "camera",
            "video",
            "accelerated media",
            "compress",
            "encoding"
        ],
        "year": [
            2017,
            2018,
            2019,
            2020,
            2021,
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            1,
            2,
            2,
            3,
            2
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/international-catrobat-association",
        "name": "International Catrobat Association",
        "tech": [
            "javascript",
            "android",
            "swift",
            "kotlin",
            "php"
        ],
        "cat": "",
        "top": [
            "education",
            "visual programming",
            "mobile programming",
            "game engines",
            "creativity tools"
        ],
        "year": [
            2022,
            2021
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            13,
            11
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/internet-health-report",
        "name": "Internet Health Report",
        "tech": [
            "python",
            "javascript",
            "apache kafka",
            "VueJS"
        ],
        "cat": "",
        "top": [
            "networking",
            "routing",
            "communication",
            "internet",
            "data analytics"
        ],
        "year": [
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/ioos",
        "name": "IOOS",
        "tech": [
            "python",
            "ocean science",
            "big data science",
            "ocean technology"
        ],
        "cat": "",
        "top": [
            "open data",
            "data science",
            "earth sciences",
            "data discovery"
        ],
        "year": [
            2021,
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            4
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/jabref-ev",
        "name": "JabRef e.V.",
        "tech": [
            "java",
            "javafx",
            "bibtex",
            "latex"
        ],
        "cat": "",
        "top": [
            "science",
            "library",
            "literature",
            "latex",
            "academia",
            "reference manager",
            "bibtex",
            "pdf"
        ],
        "year": [
            2019,
            2021,
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            2,
            1
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/jboss-community",
        "name": "JBoss Community",
        "tech": [
            "java",
            "rust",
            "golang"
        ],
        "cat": "",
        "top": [
            "iot",
            "cloud",
            "microservices",
            "kubernetes"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2018,
            2017,
            2016,
            2015,
            2014,
            2013,
            2012
        ],
        "project": [
            0,
            0,
            0,
            8,
            6,
            5,
            10,
            9,
            3,
            3,
            8,
            10,
            10,
            9
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/jderobot",
        "name": "JdeRobot",
        "tech": [
            "python",
            "ros",
            "gazebo",
            "opencv",
            "tensorflow"
        ],
        "cat": "",
        "top": [
            "education",
            "artificial intelligence",
            "robotics",
            "computer vision",
            "developer tools"
        ],
        "year": [
            2015,
            2017,
            2018,
            2019,
            2020,
            2021,
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            0,
            4,
            5,
            6,
            5,
            6,
            6
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/jenkins-wp",
        "name": "Jenkins",
        "tech": [
            "javascript",
            "java",
            "go",
            "docker",
            "kubernetes",
            "groovy",
            "html",
            "jenkins",
            "css"
        ],
        "cat": "",
        "top": [
            "developer tools",
            "automation",
            "continuous integration",
            "continuous delivery",
            "devops",
            "java",
            "development"
        ],
        "year": [
            2016,
            2018,
            2019,
            2020,
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            2,
            5,
            7,
            0,
            4
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/jenkins-x",
        "name": "Jenkins X",
        "tech": [
            "golang",
            "kubernetes",
            "gitops"
        ],
        "cat": "",
        "top": [
            "cloud",
            "CI/CD"
        ],
        "year": [
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/jitsi",
        "name": "Jitsi",
        "tech": [
            "javascript",
            "java",
            "react",
            "webrtc",
            "react native"
        ],
        "cat": "",
        "top": [
            "video conferencing",
            "WebRTC"
        ],
        "year": [
            2022,
            2018,
            2017,
            2014
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            3,
            0,
            0,
            3,
            3,
            0,
            0,
            0,
            6
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/joomla",
        "name": "Joomla!",
        "tech": [
            "mysql",
            "javascript",
            "html",
            "php",
            "css",
            "html/css",
            "cms"
        ],
        "cat": "",
        "top": [
            "web",
            "programming languages",
            "web development",
            "web applications",
            "cms",
            "web application"
        ],
        "year": [
            2009,
            2012,
            2016,
            2017,
            2018,
            2019,
            2021,
            2022
        ],
        "project": [
            16,
            0,
            0,
            7,
            0,
            0,
            0,
            5,
            8,
            7,
            3,
            0,
            5,
            4
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/joplin",
        "name": "Joplin",
        "tech": [
            "javascript",
            "react",
            "typescript",
            "electron",
            "React-Native"
        ],
        "cat": "",
        "top": [
            "database",
            "search",
            "synchronisation",
            "note-taking",
            "office"
        ],
        "year": [
            2022,
            2021,
            2020
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            5,
            6
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/kart-project",
        "name": "Kart Project",
        "tech": [
            "python",
            "c++",
            "git",
            "gis"
        ],
        "cat": "",
        "top": [
            "version control",
            "gis",
            "data",
            "point clouds",
            "spatial"
        ],
        "year": [
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/kde-community",
        "name": "KDE Community",
        "tech": [
            "c++",
            "qt",
            "qml",
            "data structures",
            "qt5"
        ],
        "cat": "",
        "top": [
            "education",
            "science",
            "applications",
            "desktop environment",
            "desktop",
            "communication",
            "desktop application"
        ],
        "year": [
            2009,
            2010,
            2011,
            2012,
            2013,
            2014,
            2015,
            2016,
            2017,
            2018,
            2019,
            2020,
            2021,
            2022
        ],
        "project": [
            37,
            46,
            47,
            59,
            50,
            39,
            36,
            32,
            24,
            17,
            22,
            19,
            15,
            6
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/keptn",
        "name": "Keptn",
        "tech": [
            "golang",
            "kubernetes",
            "angular",
            "Helm"
        ],
        "cat": "",
        "top": [
            "cloud",
            "devops",
            "sre",
            "CloudNative",
            "Operations"
        ],
        "year": [
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/kodi",
        "name": "Kodi",
        "tech": [
            "python",
            "opengl",
            "c++",
            "ffmpeg",
            "sqlite",
            "mysql"
        ],
        "cat": "",
        "top": [
            "games",
            "audio",
            "video",
            "media",
            "tv"
        ],
        "year": [
            2019,
            2020,
            2021,
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            3,
            2,
            1
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/leap-encryption-access-project",
        "name": "LEAP Encryption Access Project",
        "tech": [
            "java",
            "golang",
            "qt5",
            "docker",
            "ansible"
        ],
        "cat": "",
        "top": [
            "privacy",
            "vpn",
            "Circumvention"
        ],
        "year": [
            2022,
            2018,
            2014
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            1
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/learning-equality",
        "name": "Learning Equality",
        "tech": [
            "python",
            "javascript",
            "django",
            "vue.js"
        ],
        "cat": "",
        "top": [
            "education",
            "distributed databases",
            "offline",
            "learning"
        ],
        "year": [
            2022,
            2021
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            3
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/libcamera",
        "name": "libcamera",
        "tech": [
            "c/c++",
            "linux kernel",
            "qt5",
            "gstreamer",
            "v4l2"
        ],
        "cat": "",
        "top": [
            "camera",
            "image prcessing"
        ],
        "year": [
            2022,
            2021
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            3
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/librecube-initiative",
        "name": "LibreCube Initiative",
        "tech": [
            "python",
            "mongodb",
            "rest",
            "micropython",
            "zmq"
        ],
        "cat": "",
        "top": [
            "space",
            "cubesat",
            "mission control",
            "Communication Protocols"
        ],
        "year": [
            2022,
            2021
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            1
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/librehealth",
        "name": "LibreHealth",
        "tech": [
            "python",
            "javascript",
            "android",
            "java",
            "dart/flutter"
        ],
        "cat": "",
        "top": [
            "web",
            "deep learning",
            "hfoss",
            "radiology",
            "mobile apps"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2018,
            2017
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            4,
            9,
            0,
            4,
            5,
            4
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/libreoffice",
        "name": "LibreOffice",
        "tech": [
            "python",
            "java",
            "c++"
        ],
        "cat": "",
        "top": [
            "office suite",
            "desktop application",
            "end user application"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2018,
            2017,
            2016,
            2015,
            2014,
            2013,
            2012,
            2011
        ],
        "project": [
            0,
            0,
            7,
            9,
            11,
            10,
            10,
            9,
            9,
            7,
            6,
            6,
            7,
            2
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/libssh",
        "name": "libssh",
        "tech": [
            "c",
            "ssh"
        ],
        "cat": "",
        "top": [
            "security",
            "cryptography"
        ],
        "year": [
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/libvirt",
        "name": "libvirt",
        "tech": [
            "kvm",
            "hypervisor",
            "qemu",
            "lxc"
        ],
        "cat": "",
        "top": [
            "virtualization",
            "library"
        ],
        "year": [
            2022,
            2021,
            2020,
            2018,
            2017
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            2,
            0,
            4,
            1,
            2
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/liquid-galaxy-project",
        "name": "Liquid Galaxy project",
        "tech": [
            "python",
            "linux",
            "android",
            "flutter",
            "Google Earth"
        ],
        "cat": "",
        "top": [
            "visualization",
            "networking",
            "maps",
            "cluster",
            "ux"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            7,
            8,
            11,
            9
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/llvm-compiler-infrastructure",
        "name": "LLVM Compiler Infrastructure",
        "tech": [
            "llvm",
            "c++",
            "clang",
            "mlir",
            "c/c++"
        ],
        "cat": "",
        "top": [
            "compilers",
            "development tools",
            "libraries",
            "code analysis",
            "debuggers"
        ],
        "year": [
            2009,
            2010,
            2011,
            2013,
            2014,
            2015,
            2016,
            2017,
            2018,
            2019,
            2020,
            2021,
            2022
        ],
        "project": [
            5,
            5,
            7,
            0,
            4,
            4,
            3,
            7,
            8,
            8,
            8,
            15,
            16,
            13
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/machine-learning-for-science-ml4sci",
        "name": "Machine Learning for Science (ML4SCI)",
        "tech": [
            "python",
            "machine learning",
            "c++",
            "data analysis",
            "artificial intelligence",
            "c/c++"
        ],
        "cat": "",
        "top": [
            "machine learning",
            "science and medicine",
            "algorithms",
            "physics",
            "astronomy"
        ],
        "year": [
            2021,
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            19,
            20
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/mariadb",
        "name": "MariaDB",
        "tech": [
            "python",
            "javascript",
            "c/c++",
            "perl",
            "databases",
            "c",
            "mysql",
            "mariadb",
            "c++"
        ],
        "cat": "",
        "top": [
            "Database Engines",
            "SQL Features",
            "databases",
            "cloud",
            "distributed systems",
            "performance",
            "sql"
        ],
        "year": [
            2013,
            2014,
            2015,
            2016,
            2017,
            2018,
            2019,
            2020,
            2021,
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            3,
            4,
            3,
            5,
            1,
            1,
            4,
            2,
            4,
            6
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/mathesar",
        "name": "Mathesar",
        "tech": [
            "python",
            "postgresql",
            "javascript",
            "django",
            "svelte"
        ],
        "cat": "",
        "top": [
            "databases",
            "web",
            "data",
            "nonprofit",
            "self-hosted"
        ],
        "year": [
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/matrixorg",
        "name": "Matrix.org",
        "tech": [
            "python",
            "javascript",
            "rust",
            "go",
            "react"
        ],
        "cat": "",
        "top": [
            "interoperability",
            "decentralisation",
            "Secure Messaging",
            "realtime communication",
            "chat",
            "encryption",
            "decentralised",
            "team chat"
        ],
        "year": [
            2016,
            2017,
            2018,
            2019,
            2020,
            2021,
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            3,
            2,
            4,
            6,
            7,
            5
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/mayors-office-of-new-urban-mechanics",
        "name": "Mayor's Office of New Urban Mechanics",
        "tech": [
            "python",
            "javascript",
            "ruby",
            "tensorflow"
        ],
        "cat": "",
        "top": [
            "web",
            "machine learning",
            "gis",
            "civic tech",
            "analytics"
        ],
        "year": [
            2021,
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            2
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/mbdyn",
        "name": "MBDyn",
        "tech": [
            "python",
            "c++",
            "scripting"
        ],
        "cat": "",
        "top": [
            "robotics",
            "scientific computing",
            "multibody dynamics",
            "aeroelasticity",
            "Structural engineering",
            "linear algebra",
            "mechanical engineering",
            "aeronautics",
            "aerodynamics",
            "engineering",
            "real time",
            "simulation",
            "physics"
        ],
        "year": [
            2016,
            2017,
            2019,
            2020,
            2021,
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            2,
            0,
            1,
            1,
            2,
            1
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/mdanalysis",
        "name": "MDAnalysis",
        "tech": [
            "python",
            "cython",
            "c/c++"
        ],
        "cat": "",
        "top": [
            "science",
            "computational-chemistry",
            "high-performance-computing",
            "molecular-simulation",
            "soft-matter-physics"
        ],
        "year": [
            2022,
            2021,
            2020
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            2,
            2
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/metabrainz-foundation-inc",
        "name": "MetaBrainz Foundation Inc",
        "tech": [
            "python",
            "react",
            "perl",
            "postgres",
            "spark",
            "solr",
            "postgresql",
            "javascript"
        ],
        "cat": "",
        "top": [
            "open data",
            "music",
            "books",
            "Music recommendation",
            "music social network",
            "community",
            "metadata",
            "machine learning",
            "big data"
        ],
        "year": [
            2009,
            2010,
            2011,
            2012,
            2013,
            2014,
            2015,
            2016,
            2017,
            2018,
            2019,
            2020,
            2021,
            2022
        ],
        "project": [
            2,
            3,
            2,
            4,
            3,
            5,
            4,
            4,
            5,
            5,
            6,
            7,
            5,
            7
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/metacall",
        "name": "MetaCall",
        "tech": [
            "python",
            "c++",
            "rust",
            "nodejs",
            "docker"
        ],
        "cat": "",
        "top": [
            "cloud",
            "polyglot",
            "faas",
            "languages",
            "ffi"
        ],
        "year": [
            2022,
            2021
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            5
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/metasploit",
        "name": "Metasploit",
        "tech": [
            "c",
            "python",
            "postgresql",
            "ruby",
            "assembly"
        ],
        "cat": "",
        "top": [
            "security",
            "penetration testing",
            "offensive security",
            "exploitation"
        ],
        "year": [
            2022,
            2021,
            2020,
            2018,
            2017
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            5,
            0,
            2,
            1,
            1
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/micro-electronics-research-lab-uitu",
        "name": "Micro Electronics Research Lab - UITU",
        "tech": [
            "RISCV",
            "Processor",
            "Hardware",
            "systemonchip",
            "memory"
        ],
        "cat": "",
        "top": [
            "iot",
            "embedded",
            "Processor",
            "System on Chip",
            "RISC-V"
        ],
        "year": [
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/mit-app-inventor",
        "name": "MIT App Inventor",
        "tech": [
            "javascript",
            "java",
            "gwt"
        ],
        "cat": "",
        "top": [
            "education",
            "development tools",
            "android"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2017
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            4,
            0,
            4,
            6,
            5,
            5
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/mixxx",
        "name": "Mixxx",
        "tech": [
            "javascript",
            "c++",
            "qt",
            "audio",
            "music",
            "real-time"
        ],
        "cat": "",
        "top": [
            "music",
            "dj",
            "streaming",
            "metadata",
            "beatdetection"
        ],
        "year": [
            2011,
            2012,
            2013,
            2014,
            2016,
            2017,
            2018,
            2020,
            2022
        ],
        "project": [
            0,
            0,
            3,
            4,
            4,
            2,
            0,
            2,
            2,
            2,
            0,
            3,
            0,
            2
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/mlpack",
        "name": "mlpack",
        "tech": [
            "c++",
            "C++ template metaprogramming"
        ],
        "cat": "",
        "top": [
            "machine learning",
            "embedded",
            "ai",
            "deep learning",
            "Neural networks",
            "data mining",
            "fast algorithms"
        ],
        "year": [
            2016,
            2017,
            2018,
            2019,
            2020,
            2021,
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            6,
            10,
            6,
            9,
            8,
            8,
            4
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/moja-global",
        "name": "moja global",
        "tech": [
            "python",
            "javascript",
            "c++",
            "docker",
            "Data-Science"
        ],
        "cat": "",
        "top": [
            "climate monitoring",
            "nature based solutions",
            "land system modelling"
        ],
        "year": [
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/monado",
        "name": "Monado",
        "tech": [
            "opengl",
            "vulkan",
            "openxr",
            "Graphics",
            "XR"
        ],
        "cat": "",
        "top": [
            "vr",
            "xr",
            "AR"
        ],
        "year": [
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/moveit",
        "name": "MoveIt",
        "tech": [
            "ros",
            "c++"
        ],
        "cat": "",
        "top": [
            "robotics",
            "motion planning",
            "trajectory generation",
            "kinematics"
        ],
        "year": [
            2022,
            2021,
            2020
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            1,
            2
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/musescore",
        "name": "MuseScore",
        "tech": [
            "c++",
            "qt",
            "qml",
            "cmake"
        ],
        "cat": "",
        "top": [
            "music",
            "midi",
            "musicxml",
            "sheet music",
            "music notation"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2018,
            2017,
            2016,
            2014,
            2013
        ],
        "project": [
            0,
            0,
            0,
            0,
            2,
            5,
            0,
            3,
            3,
            3,
            4,
            3,
            3,
            2
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/mzmine",
        "name": "MZmine",
        "tech": [
            "java",
            "javafx"
        ],
        "cat": "",
        "top": [
            "visualization",
            "mass spectrometry",
            "biochemistry",
            "feature detection",
            "ion mobility"
        ],
        "year": [
            2022,
            2020
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            1
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/national-resource-for-network-biology-nrnb",
        "name": "National Resource for Network Biology (NRNB)",
        "tech": [
            "python",
            "javascript",
            "java",
            "xml",
            "r"
        ],
        "cat": "",
        "top": [
            "web application",
            "data science",
            "graphics",
            "scientific computing",
            "network biology"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2018,
            2017,
            2016,
            2014,
            2013,
            2012
        ],
        "project": [
            0,
            0,
            0,
            16,
            14,
            17,
            0,
            15,
            20,
            10,
            11,
            15,
            13,
            8
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/neutralinojs",
        "name": "Neutralinojs",
        "tech": [
            "c",
            "javascript",
            "node.js",
            "c++",
            "typescript"
        ],
        "cat": "",
        "top": [
            "desktop",
            "framework",
            "cross-platform",
            "Application Development"
        ],
        "year": [
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/numfocus",
        "name": "NumFOCUS",
        "tech": [
            "python",
            "c++",
            "r",
            "julia"
        ],
        "cat": "",
        "top": [
            "data science",
            "graphics",
            "scientific computing",
            "numerical computation"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2018,
            2017,
            2016,
            2015
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            7,
            10,
            40,
            19,
            28,
            45,
            37
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/omegaup",
        "name": "omegaUp",
        "tech": [
            "python",
            "mysql",
            "php",
            "typescript",
            "vue.js"
        ],
        "cat": "",
        "top": [
            "education",
            "web",
            "cloud",
            "edtech",
            "UX/UI",
            "cs education",
            "web community"
        ],
        "year": [
            2018,
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            1
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/open-bioinformatics-foundation-obf",
        "name": "Open Bioinformatics Foundation (OBF)",
        "tech": [
            "python",
            "javascript",
            "c++",
            "html/css",
            "Git/GitHub",
            "c",
            "react"
        ],
        "cat": "",
        "top": [
            "open science",
            "genomics",
            "bioinformatics",
            "workflows",
            "Open Source Bioinformatics"
        ],
        "year": [
            2010,
            2011,
            2012,
            2014,
            2016,
            2017,
            2018,
            2019,
            2020,
            2021,
            2022
        ],
        "project": [
            0,
            5,
            6,
            5,
            0,
            6,
            0,
            7,
            7,
            5,
            5,
            8,
            8,
            5
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/open-chemistry",
        "name": "Open Chemistry",
        "tech": [
            "python",
            "javascript",
            "opengl",
            "c++",
            "c++14"
        ],
        "cat": "",
        "top": [
            "data science",
            "graphics",
            "scientific visualization",
            "cheminformatics",
            "quantum chemistry"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2018,
            2017,
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            6,
            7,
            6,
            5,
            7,
            9
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/open-food-facts",
        "name": "Open Food Facts",
        "tech": [
            "python",
            "machine learning",
            "perl",
            "tensorflow",
            "flutter"
        ],
        "cat": "",
        "top": [
            "open data",
            "health",
            "environment",
            "mobile",
            "food"
        ],
        "year": [
            2022,
            2018
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            0,
            0,
            4
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/open-genome-informatics",
        "name": "Open Genome Informatics",
        "tech": [
            "python",
            "mysql",
            "react",
            "r-project",
            "graph"
        ],
        "cat": "",
        "top": [
            "genomics",
            "bioinformatics",
            "cloud",
            "biology",
            "data discovery"
        ],
        "year": [
            2022,
            2021,
            2020,
            2017,
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            6,
            8,
            0,
            0,
            5,
            6,
            2
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/open-robotics",
        "name": "Open Robotics",
        "tech": [
            "ros",
            "gazebo",
            "ignition",
            "Open-RMF"
        ],
        "cat": "",
        "top": [
            "robotics",
            "simulation"
        ],
        "year": [
            2022,
            2021
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            2
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/open-technologies-alliance-gfoss",
        "name": "Open Technologies Alliance - GFOSS",
        "tech": [
            "javascript",
            "c/c++",
            "nodejs",
            "python 3",
            "Machine Learning (ML)",
            "python",
            "gtk",
            "qt",
            "arduino",
            "java",
            "php/javascript/html",
            "css/html",
            "mysql",
            "perl",
            "python deep learning frameworks"
        ],
        "cat": "",
        "top": [
            "web",
            "robotics",
            "open hardware",
            "c++",
            "nodered",
            "programming languages",
            "java",
            "open education",
            "c- c+",
            "c++ tools",
            "python",
            "javascript",
            "gtk",
            "java jsp",
            "perl"
        ],
        "year": [
            2017,
            2018,
            2019,
            2021,
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            4,
            10,
            13,
            0,
            9,
            9
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/open3d-team",
        "name": "Open3D team",
        "tech": [
            "python",
            "c++",
            "cuda",
            "tensorflow",
            "pytorch"
        ],
        "cat": "",
        "top": [
            "3D machine learning",
            "3D data processing",
            "3D visualization",
            "physically based rendering"
        ],
        "year": [
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/openafs",
        "name": "OpenAFS",
        "tech": [
            "c",
            "python",
            "git",
            "ansible",
            "filesystems"
        ],
        "cat": "",
        "top": [
            "testing",
            "network",
            "storage",
            "filesystems"
        ],
        "year": [
            2022,
            2010,
            2009
        ],
        "project": [
            3,
            5,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/openastronomy",
        "name": "OpenAstronomy",
        "tech": [
            "python",
            "javascript",
            "julia",
            "css"
        ],
        "cat": "",
        "top": [
            "astronomy",
            "solar physics",
            "high energy astrophysics"
        ],
        "year": [
            2022,
            2020,
            2018,
            2017,
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            7,
            8,
            8,
            0,
            10,
            0,
            8
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/opencv",
        "name": "OpenCV",
        "tech": [
            "python",
            "c++",
            "deep learning",
            "ai"
        ],
        "cat": "",
        "top": [
            "robotics",
            "computer vision",
            "ai",
            "deep learning"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2017,
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            11,
            15,
            0,
            8,
            14,
            11,
            10
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/openmrs",
        "name": "OpenMRS",
        "tech": [
            "mysql",
            "javascript",
            "java",
            "fhir",
            "Cypress"
        ],
        "cat": "",
        "top": [
            "platform",
            "Electronic Medical Record System"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2018,
            2017,
            2016,
            2015,
            2014,
            2013,
            2012,
            2011,
            2010,
            2009
        ],
        "project": [
            12,
            13,
            15,
            17,
            11,
            12,
            14,
            9,
            15,
            10,
            12,
            9,
            11,
            5
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/openstreetmap",
        "name": "OpenStreetMap",
        "tech": [
            "python",
            "javascript",
            "java",
            "c++",
            "sql"
        ],
        "cat": "",
        "top": [
            "databases",
            "routing",
            "gis",
            "ui",
            "geocoding"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2018,
            2017,
            2016,
            2015,
            2012,
            2011,
            2010,
            2009
        ],
        "project": [
            6,
            6,
            3,
            5,
            0,
            0,
            7,
            4,
            5,
            5,
            5,
            4,
            4,
            4
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/opensuse-project",
        "name": "openSUSE Project",
        "tech": [
            "python",
            "linux",
            "rust",
            "Testing",
            "configuration management",
            "c/c++",
            "ruby",
            "perl",
            "ruby on rail",
            "html/javascript"
        ],
        "cat": "",
        "top": [
            "operating systems",
            "software quality",
            "developer tools",
            "containers",
            "edge",
            "web",
            "qa",
            "packaging",
            "ui/ux"
        ],
        "year": [
            2009,
            2011,
            2012,
            2013,
            2014,
            2016,
            2017,
            2018,
            2020,
            2021,
            2022
        ],
        "project": [
            6,
            0,
            13,
            9,
            10,
            14,
            0,
            6,
            5,
            2,
            0,
            3,
            6,
            4
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/openvino-toolkit",
        "name": "OpenVINO Toolkit",
        "tech": [
            "python",
            "c++",
            "x86"
        ],
        "cat": "",
        "top": [
            "deep learning",
            "Neural networks",
            "Edge AI",
            "DL-inference"
        ],
        "year": [
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/openwisp",
        "name": "OpenWISP",
        "tech": [
            "python",
            "javascript",
            "django",
            "lua",
            "openwrt"
        ],
        "cat": "",
        "top": [
            "networking",
            "network management system",
            "wifi",
            "vpn",
            "sdn"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2018,
            2017
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            5,
            2,
            2,
            3,
            5,
            2
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/oppia-foundation",
        "name": "Oppia Foundation",
        "tech": [
            "python",
            "android",
            "google app engine",
            "angular",
            "typescript"
        ],
        "cat": "",
        "top": [
            "education",
            "web",
            "community",
            "nonprofit",
            "social impact"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2018,
            2017,
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            3,
            7,
            4,
            12,
            18,
            14
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/orcasound",
        "name": "Orcasound",
        "tech": [
            "python",
            "javascript",
            "raspberry pi",
            "elixir",
            "NextJs"
        ],
        "cat": "",
        "top": [
            "web",
            "audio",
            "ai",
            "acoustics",
            "community science"
        ],
        "year": [
            2022,
            2021,
            2020
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            4,
            4
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/organic-maps",
        "name": "Organic Maps",
        "tech": [
            "android",
            "java",
            "c++",
            "ios",
            "OpenStreetMap"
        ],
        "cat": "",
        "top": [
            "privacy",
            "maps",
            "navigation",
            "mobile",
            "offline"
        ],
        "year": [
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/osgeo-open-source-geospatial-foundation",
        "name": "OSGeo (Open Source Geospatial Foundation)",
        "tech": [
            "c",
            "python",
            "javascript",
            "java",
            "c++",
            "c/c++",
            "sql",
            "open source databases",
            "ogc standards"
        ],
        "cat": "",
        "top": [
            "open science",
            "gis",
            "citizen science",
            "geolocation",
            "mapping",
            "databases",
            "routing",
            "science",
            "maps",
            "geospatial",
            "cartography"
        ],
        "year": [
            2010,
            2011,
            2012,
            2014,
            2015,
            2016,
            2017,
            2018,
            2019,
            2020,
            2021,
            2022
        ],
        "project": [
            0,
            7,
            19,
            20,
            0,
            22,
            13,
            20,
            13,
            10,
            7,
            10,
            12,
            6
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/our-world-in-data",
        "name": "Our World In Data",
        "tech": [
            "python",
            "mysql",
            "d3",
            "typescript",
            "pandas"
        ],
        "cat": "",
        "top": [
            "open data",
            "data visualisation",
            "Data cataloging"
        ],
        "year": [
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/owasp-foundation",
        "name": "OWASP Foundation",
        "tech": [
            "python",
            "javascript",
            "java",
            "ZAP",
            "Juice Shop"
        ],
        "cat": "",
        "top": [
            "web",
            "cloud",
            "application security",
            "cybersecurity",
            "DevSecOps"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2018,
            2016,
            2014,
            2012
        ],
        "project": [
            0,
            0,
            0,
            4,
            0,
            16,
            0,
            5,
            0,
            8,
            12,
            12,
            14,
            15
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/pecan-project",
        "name": "PEcAn Project",
        "tech": [
            "r",
            "docker",
            "api",
            "geospatial"
        ],
        "cat": "",
        "top": [
            "data science",
            "ecosystem models",
            "scientific visualization",
            "climate science",
            "Ecological Forecasting",
            ""
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2018,
            2017
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            1,
            2,
            3,
            4,
            5
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/performance-co-pilot",
        "name": "Performance Co-Pilot",
        "tech": [
            "c",
            "grafana",
            "redis",
            "htop",
            "sysstat"
        ],
        "cat": "",
        "top": [
            "metrics",
            "visualization",
            "distributed",
            "performance",
            "observability"
        ],
        "year": [
            2022,
            2020,
            2019,
            2018,
            2017,
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            5,
            5,
            2,
            3,
            0,
            2
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/plone-foundation",
        "name": "Plone Foundation",
        "tech": [
            "python",
            "javascript",
            "react",
            "html",
            "css",
            "reactjs"
        ],
        "cat": "",
        "top": [
            "web",
            "cms",
            "collaboration",
            "communications",
            "content management"
        ],
        "year": [
            2009,
            2010,
            2011,
            2013,
            2014,
            2016,
            2017,
            2018,
            2022
        ],
        "project": [
            5,
            4,
            3,
            0,
            2,
            2,
            0,
            3,
            4,
            4,
            0,
            0,
            0,
            4
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/polypheny",
        "name": "Polypheny",
        "tech": [
            "javascript",
            "java",
            "sql",
            "angular"
        ],
        "cat": "",
        "top": [
            "database",
            "big data",
            "cloud",
            "polystore",
            "nosql"
        ],
        "year": [
            2022,
            2021
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            3
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/postgresql",
        "name": "PostgreSQL",
        "tech": [
            "c",
            "python",
            "postgresql",
            "javascript",
            "sql"
        ],
        "cat": "",
        "top": [
            "web",
            "database",
            "ui",
            "sql",
            "Benchmark"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2018,
            2017,
            2010
        ],
        "project": [
            0,
            5,
            0,
            0,
            0,
            0,
            0,
            0,
            4,
            3,
            4,
            3,
            6,
            7
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/powerdns",
        "name": "PowerDNS",
        "tech": [
            "c++",
            "DNS"
        ],
        "cat": "",
        "top": [
            "DNS recursive solutions",
            "Authoritative DNS software"
        ],
        "year": [
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/processing-foundation",
        "name": "Processing Foundation",
        "tech": [
            "python",
            "javascript",
            "android",
            "java",
            "opengl"
        ],
        "cat": "",
        "top": [
            "education",
            "web",
            "graphics",
            "creative coding",
            "design"
        ],
        "year": [
            2014,
            2015,
            2017,
            2018,
            2019,
            2020,
            2021,
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            11,
            14,
            0,
            14,
            16,
            16,
            11,
            11,
            8
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/public-lab",
        "name": "Public Lab",
        "tech": [
            "javascript",
            "ruby on rails"
        ],
        "cat": "",
        "top": [
            "science",
            "environment",
            "community",
            "documentation",
            "forum"
        ],
        "year": [
            2022,
            2021,
            2019,
            2018,
            2017,
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            5,
            5,
            9,
            12,
            0,
            4,
            3
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/purr-data",
        "name": "Purr Data",
        "tech": [
            "c",
            "javascript",
            "html5",
            "Emscripten"
        ],
        "cat": "",
        "top": [
            "web",
            "graphics",
            "audio",
            "realtime"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2018
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            1,
            3,
            3,
            1
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/python-software-foundation",
        "name": "Python Software Foundation",
        "tech": [
            "python",
            "javascript",
            "sqlite"
        ],
        "cat": "",
        "top": [
            "security",
            "database",
            "science",
            "design"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2018,
            2017,
            2016,
            2015,
            2014,
            2013,
            2012,
            2011,
            2010,
            2009
        ],
        "project": [
            25,
            31,
            30,
            26,
            33,
            40,
            62,
            49,
            29,
            14,
            30,
            24,
            34,
            28
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/qemu",
        "name": "QEMU",
        "tech": [
            "c",
            "python",
            "linux",
            "rust"
        ],
        "cat": "",
        "top": [
            "systems programming",
            "kernel",
            "compiler",
            "emulator",
            "hypervisor"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2018,
            2017,
            2016,
            2015,
            2014
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            6,
            7,
            6,
            4,
            4,
            3,
            3,
            6,
            4
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/r-project-for-statistical-computing",
        "name": "R project for statistical computing",
        "tech": [
            "c",
            "javascript",
            "c++",
            "r-project",
            "fortran",
            "c/c++"
        ],
        "cat": "",
        "top": [
            "visualization",
            "machine learning",
            "data science",
            "graphics",
            "statistics",
            "data visualization"
        ],
        "year": [
            2010,
            2012,
            2014,
            2015,
            2016,
            2017,
            2018,
            2019,
            2020,
            2021,
            2022
        ],
        "project": [
            0,
            4,
            0,
            16,
            0,
            17,
            23,
            22,
            33,
            24,
            30,
            20,
            21,
            13
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/radar-base",
        "name": "RADAR-base",
        "tech": [
            "java",
            "kotlin",
            "docker",
            "angular",
            "kafka",
            "c",
            "python",
            "go",
            "c++",
            "qt",
            "rust",
            "cpp",
            "nodejs"
        ],
        "cat": "",
        "top": [
            "web",
            "mhealth",
            "remote patient monitoring",
            "micro-services",
            "devices",
            "reverse engineering",
            "debugging",
            "program analysis",
            "disassembly"
        ],
        "year": [
            2016,
            2017,
            2018,
            2020,
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            3,
            5,
            0,
            4,
            0,
            3
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/red-hen-lab",
        "name": "Red Hen Lab",
        "tech": [
            "python",
            "machine learning",
            "computer vision",
            "nlp",
            "data science"
        ],
        "cat": "",
        "top": [
            "data science",
            "media",
            "language",
            "multimodal communication",
            "gesture"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2018,
            2017,
            2016,
            2015
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            5,
            9,
            10,
            15,
            8,
            12,
            12
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/responsible-ai-and-human-centred-technology",
        "name": "Responsible AI and Human Centred Technology",
        "tech": [
            "python",
            "javascript",
            "Technical writing"
        ],
        "cat": "",
        "top": [
            "machine learning",
            "ai",
            "Fairness",
            "Robustness",
            "Safety",
            "Interpretibility"
        ],
        "year": [
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            4
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/rizin",
        "name": "Rizin",
        "tech": [
            "c",
            "python",
            "c++",
            "qt"
        ],
        "cat": "",
        "top": [
            "reverse engineering",
            "computer security",
            "debugging",
            "emulation",
            "disassembly"
        ],
        "year": [
            2022,
            2021
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            2
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/robocomp",
        "name": "RoboComp",
        "tech": [
            "python",
            "opencv",
            "c++",
            "qt",
            "pytorch"
        ],
        "cat": "",
        "top": [
            "robotics",
            "computer vision",
            "component-based development",
            "Multi-agent Systems"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2018,
            2017,
            2015,
            2013
        ],
        "project": [
            0,
            0,
            0,
            0,
            2,
            0,
            4,
            0,
            9,
            8,
            10,
            10,
            10,
            5
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/robolectric",
        "name": "Robolectric",
        "tech": [
            "android",
            "java",
            "jvm",
            "asm"
        ],
        "cat": "",
        "top": [
            "testing",
            "mobile"
        ],
        "year": [
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/rocketchat",
        "name": "rocket.chat",
        "tech": [
            "javascript",
            "raspberry pi",
            "typescript",
            "node",
            "meteorJS"
        ],
        "cat": "",
        "top": [
            "communications",
            "messaging",
            "group chat",
            "Team Collaboration",
            "Chat platform"
        ],
        "year": [
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            12
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/rtems-project",
        "name": "RTEMS Project",
        "tech": [
            "python",
            "c/c++",
            "assembly",
            "posix"
        ],
        "cat": "",
        "top": [
            "kernel",
            "embedded",
            "real-time",
            "multicore",
            "rtos"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2018,
            2017,
            2016,
            2015,
            2014,
            2013,
            2012,
            2011,
            2010,
            2009
        ],
        "project": [
            6,
            8,
            8,
            10,
            8,
            5,
            9,
            5,
            4,
            4,
            4,
            5,
            4,
            4
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/ruby",
        "name": "Ruby",
        "tech": [
            "ruby on rails",
            "ruby",
            "rubygems",
            "bundler"
        ],
        "cat": "",
        "top": [
            "security",
            "web"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2018,
            2016,
            2015
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            6,
            12,
            0,
            5,
            5,
            4,
            5,
            3
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/sagemath",
        "name": "SageMath",
        "tech": [
            "python",
            "cython",
            "c/c++",
            "python 3"
        ],
        "cat": "",
        "top": [
            "mathematics",
            "education",
            "research",
            "toolbox"
        ],
        "year": [
            2012,
            2013,
            2014,
            2015,
            2016,
            2017,
            2018,
            2019,
            2020,
            2021,
            2022
        ],
        "project": [
            0,
            0,
            0,
            3,
            3,
            5,
            5,
            5,
            5,
            5,
            4,
            5,
            7,
            5
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/scala-center",
        "name": "Scala Center",
        "tech": [
            "scala",
            "scala.js",
            "scala native",
            "llvm",
            "jvm"
        ],
        "cat": "",
        "top": [
            "education",
            "compilers",
            "tooling",
            "programming-tools",
            "functional-programming",
            "programming-language"
        ],
        "year": [
            2016,
            2017,
            2018,
            2021,
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            9,
            8,
            1,
            0,
            0,
            4,
            4
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/score-lab",
        "name": "SCoRe Lab",
        "tech": [
            "python",
            "java",
            "go",
            "nodejs",
            "reactjs",
            "android",
            "node",
            "pyth",
            "gcp",
            "golan",
            "golang"
        ],
        "cat": "",
        "top": [
            "security",
            "web",
            "machine learning",
            "cloud",
            "iot",
            "mobile",
            "mobile applications",
            "embedded systems",
            "web development",
            "information security"
        ],
        "year": [
            2015,
            2016,
            2017,
            2018,
            2019,
            2020,
            2021,
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            7,
            16,
            18,
            27,
            25,
            23,
            21
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/scummvm",
        "name": "ScummVM",
        "tech": [
            "opengl",
            "lua",
            "c++",
            "assembly",
            "sdl"
        ],
        "cat": "",
        "top": [
            "games",
            "game engines",
            "software preservation",
            "software archeology"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2018,
            2017,
            2016,
            2014,
            2013,
            2012,
            2011,
            2010,
            2009
        ],
        "project": [
            4,
            4,
            1,
            3,
            4,
            5,
            0,
            3,
            2,
            3,
            3,
            4,
            5,
            3
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/seaql",
        "name": "SeaQL",
        "tech": [
            "mysql",
            "postgresql",
            "rust",
            "sql",
            "sqlite"
        ],
        "cat": "",
        "top": [
            "database",
            "library",
            "framework",
            "sql",
            "rust"
        ],
        "year": [
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/semi-technologies",
        "name": "Semi Technologies",
        "tech": [
            "python",
            "machine learning",
            "golang",
            "vectors",
            "natural language processing"
        ],
        "cat": "",
        "top": [
            "machine learning",
            "Vector Database",
            "Search Engines"
        ],
        "year": [
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/sktime",
        "name": "sktime",
        "tech": [
            "python",
            "github",
            "sphinx",
            "scikit-learn"
        ],
        "cat": "",
        "top": [
            "data science",
            "ai",
            "time series",
            "toolbox frameworks"
        ],
        "year": [
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/society-for-arts-and-technology-sat",
        "name": "Society for Arts and Technology (SAT)",
        "tech": [
            "python",
            "javascript",
            "opengl",
            "c++",
            "supercollider"
        ],
        "cat": "",
        "top": [
            "web",
            "graphics",
            "cloud",
            "multimedia",
            "accessibility"
        ],
        "year": [
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/software-heritage",
        "name": "Software Heritage",
        "tech": [
            "python",
            "postgresql",
            "javascript",
            "django",
            "git"
        ],
        "cat": "",
        "top": [
            "big data",
            "digital preservation",
            "source code management",
            "floss",
            "big code"
        ],
        "year": [
            2022,
            2021,
            2019
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            0,
            2,
            1
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/spdx",
        "name": "SPDX",
        "tech": [
            "python",
            "java",
            "json",
            "go",
            "rdf",
            "golang",
            "xml",
            "c",
            "github"
        ],
        "cat": "",
        "top": [
            "compliance",
            "licensing",
            "data",
            "vulnerabilities",
            "open source",
            "opensource"
        ],
        "year": [
            2017,
            2018,
            2019,
            2020,
            2021,
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            4,
            4,
            8,
            4,
            4,
            2
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/stear-group",
        "name": "Stear group",
        "tech": [
            "c++",
            "hpc",
            "python",
            "boost",
            "cuda",
            "opencl",
            "high performance computing",
            "parallel processing"
        ],
        "cat": "",
        "top": [
            "library",
            "optimization",
            "parallel algorithms",
            "hpx",
            "application",
            "machine learning",
            "concurrency",
            "high-performance computing",
            "runtime systems",
            "parallelism",
            "high performance computing",
            "parallel computing",
            "gpu"
        ],
        "year": [
            2014,
            2015,
            2016,
            2017,
            2018,
            2020,
            2021,
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            2,
            5,
            4,
            4,
            4,
            0,
            5,
            2,
            4
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/strace",
        "name": "strace",
        "tech": [
            "c",
            "shell",
            "make",
            "autotools",
            "gawk"
        ],
        "cat": "",
        "top": [
            "debugging",
            "tracing",
            "diagnostic"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2018,
            2017,
            2016,
            2015,
            2014
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            2,
            1,
            4,
            4,
            2,
            2,
            1,
            1,
            1
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/submitty",
        "name": "Submitty",
        "tech": [
            "python",
            "postgresql",
            "javascript",
            "c++",
            "php"
        ],
        "cat": "",
        "top": [
            "education",
            "visualization",
            "web",
            "privacy/security",
            "communication"
        ],
        "year": [
            2022,
            2020,
            2019,
            2018
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            4,
            3,
            0,
            3
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/sugar-labs",
        "name": "Sugar Labs",
        "tech": [
            "python",
            "gtk",
            "typescript",
            "javascipt"
        ],
        "cat": "",
        "top": [
            "education",
            "games",
            "desktop"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2018,
            2017,
            2016,
            2015,
            2014,
            2013,
            2010
        ],
        "project": [
            0,
            3,
            0,
            0,
            7,
            9,
            5,
            5,
            9,
            11,
            8,
            9,
            8,
            9
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/swift",
        "name": "Swift",
        "tech": [
            "c++",
            "cmake",
            "swift"
        ],
        "cat": "",
        "top": [
            "compilers",
            "cross-platform",
            "Packages",
            "Server development",
            "Standard Libraries"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2018
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            4,
            5,
            5
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/sympy",
        "name": "SymPy",
        "tech": [
            "python",
            "numpy",
            "jupyter"
        ],
        "cat": "",
        "top": [
            "mathematics",
            "physics",
            "symbolic mathematics"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2018,
            2017,
            2016,
            2014,
            2013,
            2012,
            2011
        ],
        "project": [
            0,
            0,
            9,
            6,
            7,
            10,
            0,
            7,
            8,
            7,
            10,
            6,
            6,
            3
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/synfig",
        "name": "Synfig",
        "tech": [
            "python",
            "c++",
            "gtk",
            "gtkmm"
        ],
        "cat": "",
        "top": [
            "2d/3d graphics",
            "animation",
            "vector graphics"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            2,
            0,
            2
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/syslog-ng",
        "name": "syslog-ng",
        "tech": [
            "c",
            "python",
            "sql",
            "elasticsearch",
            "kafka",
            "c/c++",
            "java",
            "big data",
            "rest",
            "rust"
        ],
        "cat": "",
        "top": [
            "cloud",
            "data processing pipeline",
            "reliable log transfer",
            "logging",
            "high-performance data processing",
            "log management",
            "python",
            "message queue",
            "continuous delivery",
            "data extraction",
            "message correlation"
        ],
        "year": [
            2014,
            2015,
            2016,
            2018,
            2019,
            2020,
            2021,
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            4,
            4,
            4,
            0,
            1,
            2,
            1,
            2,
            2
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/tarantool",
        "name": "Tarantool",
        "tech": [
            "c",
            "python",
            "lua",
            "c++",
            "sql"
        ],
        "cat": "",
        "top": [
            "sql",
            "In-memory",
            "JIT",
            "IMDG",
            "NoSQL Database"
        ],
        "year": [
            2022,
            2021
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/tardis-rt-collaboration",
        "name": "TARDIS RT Collaboration",
        "tech": [
            "python",
            "numba",
            "numpy",
            "jupyter",
            "pandas"
        ],
        "cat": "",
        "top": [
            "visualization",
            "big data",
            "simulation",
            "astrophysics",
            "science",
            "astronomy",
            "supernova"
        ],
        "year": [
            2015,
            2016,
            2020,
            2021,
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            3,
            0,
            0,
            0,
            3,
            3,
            4
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/tensorflow",
        "name": "TensorFlow",
        "tech": [
            "machine learning",
            "tensorflow",
            "ai",
            "Jax",
            "keras"
        ],
        "cat": "",
        "top": [
            "education",
            "research",
            "machine learning"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            19,
            17,
            17,
            22
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/the-enigma-team",
        "name": "The ENIGMA Team",
        "tech": [
            "opengl",
            "c++",
            "qt5"
        ],
        "cat": "",
        "top": [
            "graphics",
            "game development",
            "compiler",
            "programming",
            "game design"
        ],
        "year": [
            2022,
            2021
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            3
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/the-freebsd-project",
        "name": "The FreeBSD Project",
        "tech": [
            "c",
            "llvm",
            "assembly",
            "make",
            "POSIX shell",
            "shell script",
            "c/c+",
            "c/c++"
        ],
        "cat": "",
        "top": [
            "virtualization",
            "operating system",
            "Embedded System",
            "operating systems",
            "embedded systems",
            "cloud",
            "kernel",
            "security"
        ],
        "year": [
            2009,
            2010,
            2011,
            2012,
            2013,
            2014,
            2015,
            2016,
            2017,
            2018,
            2019,
            2020,
            2021,
            2022
        ],
        "project": [
            17,
            16,
            13,
            11,
            10,
            14,
            14,
            12,
            5,
            8,
            6,
            6,
            5,
            7
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/the-honeynet-project",
        "name": "The Honeynet Project",
        "tech": [
            "python",
            "javascript",
            "django",
            "go",
            "docker"
        ],
        "cat": "",
        "top": [
            "honeypots",
            "malware analysis",
            "Threat Intelligence"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2018,
            2017,
            2016,
            2015,
            2013,
            2012,
            2011,
            2010,
            2009
        ],
        "project": [
            9,
            16,
            12,
            15,
            13,
            0,
            7,
            11,
            12,
            17,
            9,
            11,
            11,
            6
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/the-jpf-team",
        "name": "The JPF team",
        "tech": [
            "android",
            "java",
            "distributed systems",
            "jvm"
        ],
        "cat": "",
        "top": [
            "model checking",
            "symbolic execution",
            "verification of concurrent systems",
            "program analysis",
            "test input generation"
        ],
        "year": [
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/the-julia-language",
        "name": "The Julia Language",
        "tech": [
            "machine learning",
            "julia",
            "data science",
            "gui",
            "models"
        ],
        "cat": "",
        "top": [
            "math",
            "machine learning",
            "science",
            "data science",
            "graphs"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2017,
            2016,
            2014
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            3,
            0,
            10,
            16,
            0,
            13,
            15,
            20,
            19
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/the-libreswan-project",
        "name": "The Libreswan Project",
        "tech": [
            "c",
            "python",
            "shell",
            "RFCs"
        ],
        "cat": "",
        "top": [
            "vpn",
            "ipsec",
            "ikev2"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2018,
            2017
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            3,
            1,
            3,
            1,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/the-linux-foundation",
        "name": "The Linux Foundation",
        "tech": [
            "c",
            "linux",
            "c++",
            "cups",
            "ipp"
        ],
        "cat": "",
        "top": [
            "kernel",
            "automotive",
            "printing",
            "iio",
            "zephyr"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2018,
            2017,
            2016,
            2014,
            2013,
            2012,
            2011,
            2010,
            2009
        ],
        "project": [
            7,
            11,
            12,
            14,
            14,
            15,
            0,
            11,
            11,
            12,
            7,
            13,
            18,
            14
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/the-mifos-initiative",
        "name": "The Mifos Initiative",
        "tech": [
            "android",
            "java",
            "kotlin",
            "spring",
            "angular",
            "mysql",
            "angularjs"
        ],
        "cat": "",
        "top": [
            "cloud",
            "ai",
            "fintech",
            "financial inclusion",
            "mobile banking",
            "digital financial services",
            "microfinance"
        ],
        "year": [
            2014,
            2016,
            2017,
            2018,
            2019,
            2020,
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            7,
            0,
            6,
            10,
            12,
            14,
            17,
            0,
            9
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/the-netbsd-foundation",
        "name": "The NetBSD Foundation",
        "tech": [
            "c",
            "shell script",
            "make",
            "unix",
            "bsd"
        ],
        "cat": "",
        "top": [
            "kernel",
            "packaging",
            "userland",
            "unix",
            "bsd"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2018,
            2017,
            2016,
            2013,
            2012,
            2011,
            2010
        ],
        "project": [
            0,
            6,
            8,
            6,
            4,
            0,
            0,
            4,
            3,
            4,
            7,
            6,
            0,
            5
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/the-ns-3-network-simulator-project",
        "name": "The ns-3 Network Simulator Project",
        "tech": [
            "python",
            "django",
            "c++"
        ],
        "cat": "",
        "top": [
            "computer networking",
            "network simulation"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2018,
            2017,
            2015,
            2014,
            2013,
            2012,
            2010,
            2009
        ],
        "project": [
            3,
            4,
            0,
            3,
            2,
            4,
            4,
            0,
            5,
            5,
            4,
            4,
            3,
            2
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/the-palisadoes-foundation",
        "name": "The Palisadoes Foundation",
        "tech": [
            "mongodb",
            "node.js",
            "flutter",
            "graphql",
            "typescript"
        ],
        "cat": "",
        "top": [
            "web",
            "api",
            "database",
            "cloud",
            "mobile"
        ],
        "year": [
            2022,
            2021
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            5,
            8
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/the-tor-project",
        "name": "The Tor Project",
        "tech": [
            "c",
            "python",
            "rust",
            "javascript",
            "c++"
        ],
        "cat": "",
        "top": [
            "security",
            "privacy",
            "anti-censorship",
            "Human Rights",
            "Surveillance",
            "anonymity",
            "counter-censorship",
            "free-speech"
        ],
        "year": [
            2013,
            2016,
            2017,
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            6,
            0,
            0,
            5,
            4,
            0,
            0,
            0,
            0,
            3
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/tianocore",
        "name": "TianoCore",
        "tech": [
            "c",
            "python",
            "rust",
            "golang",
            "uefi"
        ],
        "cat": "",
        "top": [
            "firmware",
            "uefi",
            "edk2",
            "acpi",
            "BIOS"
        ],
        "year": [
            2022,
            2021
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            5,
            3
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/unikraft",
        "name": "Unikraft",
        "tech": [
            "c",
            "python",
            "xen",
            "kvm",
            "assembly language"
        ],
        "cat": "",
        "top": [
            "virtualization",
            "cloud",
            "software reuse",
            "software configurability"
        ],
        "year": [
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/videolan",
        "name": "VideoLAN",
        "tech": [
            "c",
            "c++",
            "qt",
            "assembly",
            "video",
            "opengl"
        ],
        "cat": "",
        "top": [
            "audio",
            "streaming",
            "video",
            "codecs",
            "media database",
            "multimedia",
            "editor",
            "editing",
            "non-linear"
        ],
        "year": [
            2009,
            2010,
            2011,
            2016,
            2017,
            2018,
            2019,
            2020,
            2021,
            2022
        ],
        "project": [
            12,
            14,
            12,
            0,
            0,
            0,
            0,
            3,
            9,
            10,
            9,
            8,
            9,
            6
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/wagtail",
        "name": "Wagtail",
        "tech": [
            "python",
            "javascript",
            "django"
        ],
        "cat": "",
        "top": [
            "web",
            "accessibility",
            "cms"
        ],
        "year": [
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/wellcome-sanger-institute",
        "name": "Wellcome Sanger Tree of Life",
        "tech": [
            "python",
            "javascript",
            "rust",
            "nextflow"
        ],
        "cat": "",
        "top": [
            "genomics",
            "bioinformatics",
            "data analysis",
            "genome assembly"
        ],
        "year": [
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/wikimedia-foundation",
        "name": "Wikimedia Foundation",
        "tech": [
            "python",
            "javascript",
            "html",
            "php",
            "css"
        ],
        "cat": "",
        "top": [
            "semantic web",
            "wikipedia",
            "wikimedia",
            "mediawiki",
            "i18n"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2018,
            2017,
            2016,
            2015,
            2012,
            2011,
            2010,
            2009
        ],
        "project": [
            4,
            6,
            7,
            8,
            0,
            0,
            8,
            6,
            7,
            12,
            11,
            14,
            10,
            7
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/xorg-foundation",
        "name": "X.Org Foundation",
        "tech": [
            "opengl",
            "vulkan",
            "x11",
            "wayland",
            "DRM"
        ],
        "cat": "",
        "top": [
            "graphics",
            "drivers"
        ],
        "year": [
            2022,
            2020,
            2019,
            2017,
            2016,
            2015,
            2014,
            2013,
            2011
        ],
        "project": [
            0,
            0,
            4,
            0,
            3,
            4,
            5,
            2,
            4,
            0,
            2,
            1,
            0,
            3
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/xfce",
        "name": "Xfce",
        "tech": [
            "c",
            "gtk"
        ],
        "cat": "",
        "top": [
            "desktop",
            "customization"
        ],
        "year": [
            2022,
            2021
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            3
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/xmpp-standards-foundation",
        "name": "XMPP Standards Foundation",
        "tech": [
            "javascript",
            "java",
            "go",
            "vala",
            "xmpp",
            "lua",
            "asynchronous i/o",
            "python 3"
        ],
        "cat": "",
        "top": [
            "instant messaging",
            "chat",
            "WebRTC",
            "Jingle",
            "Real-Time Communication",
            "realtime communications",
            "machine-to-machine",
            "internet of things",
            "xmpp"
        ],
        "year": [
            2010,
            2011,
            2012,
            2015,
            2017,
            2019,
            2020,
            2022
        ],
        "project": [
            0,
            4,
            4,
            7,
            0,
            0,
            6,
            0,
            2,
            0,
            3,
            2,
            0,
            1
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/xwiki",
        "name": "XWiki",
        "tech": [
            "javascript",
            "java",
            "html5",
            "css3",
            "velocity"
        ],
        "cat": "",
        "top": [
            "web development",
            "wiki",
            "platform",
            "web applications",
            "structured data"
        ],
        "year": [
            2022,
            2021,
            2020,
            2019,
            2018,
            2017,
            2016,
            2012,
            2011,
            2009
        ],
        "project": [
            4,
            0,
            3,
            3,
            0,
            0,
            0,
            0,
            2,
            3,
            3,
            1,
            1,
            1
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2022/organizations/zulip",
        "name": "Zulip",
        "tech": [
            "python",
            "django",
            "typescript",
            "react native",
            "electron",
            "javascript"
        ],
        "cat": "",
        "top": [
            "mobile",
            "great developer tooling",
            "visual design",
            "teaching quality codebase",
            "team chat",
            "chat",
            "bots"
        ],
        "year": [
            2016,
            2017,
            2018,
            2019,
            2020,
            2021,
            2022
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            10,
            10,
            17,
            18,
            18,
            15
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/5129526253715456",
        "name": "52\u00b0North GmbH",
        "tech": [
            "python",
            "javascript",
            "java",
            "web services",
            "ogc standards"
        ],
        "cat": "",
        "top": [
            "citizen science",
            "spatial information infrastructures",
            "open standards",
            "geoinformation systems"
        ],
        "year": [
            2021
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/4826533859950592",
        "name": "Accord Project",
        "tech": [
            "javascript",
            "react",
            "compiler",
            "ocaml",
            "coq"
        ],
        "cat": "",
        "top": [
            "compilers",
            "ai",
            "legal",
            "smart contracts",
            "blockchain"
        ],
        "year": [
            2021,
            2020
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            3,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/4866654592303104",
        "name": "AerospaceResearch.net",
        "tech": [
            "python",
            "machine learning",
            "sdr",
            "sqlite",
            "raspberry pi"
        ],
        "cat": "",
        "top": [
            "space applications",
            "signal processing",
            "software defined radio",
            "cubesats",
            "simulations"
        ],
        "year": [
            2021,
            2020,
            2019,
            2018,
            2017
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            6,
            6,
            7,
            5,
            6,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/5995132419047424",
        "name": "Android Graphics Tools Team",
        "tech": [
            "java",
            "opengl",
            "c++",
            "spir-v",
            "webgpu"
        ],
        "cat": "",
        "top": [
            "bug finding",
            "developer tools",
            "graphics",
            "fuzzing"
        ],
        "year": [
            2021,
            2020,
            2019
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            3,
            3,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/5702681049432064",
        "name": "Apertium",
        "tech": [
            "python",
            "javascript",
            "c++",
            "xml",
            "bash",
            "perl",
            "finite-state technologies"
        ],
        "cat": "",
        "top": [
            "natural language processing",
            "machine translation",
            "less-resourced languages",
            "computer-aided translation",
            "morphological analysis",
            "human language technologies"
        ],
        "year": [
            2009,
            2010,
            2011,
            2012,
            2013,
            2014,
            2016,
            2017,
            2018,
            2019,
            2020,
            2021
        ],
        "project": [
            8,
            8,
            9,
            10,
            10,
            15,
            0,
            11,
            10,
            11,
            10,
            7,
            10,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/5659873647263744",
        "name": "apertus\u00b0 Association",
        "tech": [
            "python",
            "c/c++",
            "fpga",
            "rust",
            "nix",
            "linux",
            "vhdl",
            "embedded"
        ],
        "cat": "",
        "top": [
            "computer vision",
            "linux",
            "camera",
            "image processing",
            "digital hardware design",
            "computational photography",
            "digital imaging"
        ],
        "year": [
            2017,
            2018,
            2019,
            2020,
            2021
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            4,
            4,
            4,
            5,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/5764622900002816",
        "name": "Bench-Routes",
        "tech": [
            "react",
            "golang",
            "docker"
        ],
        "cat": "",
        "top": [
            "monitoring",
            "web",
            "devops",
            "time-series"
        ],
        "year": [
            2021
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/5123901926932480",
        "name": "Boost C++ Libraries",
        "tech": [
            "c++",
            "c++11",
            "c++14",
            "c++17",
            "c++20"
        ],
        "cat": "",
        "top": [
            "algorithms",
            "image processing",
            "c++",
            "data structures",
            "programming libraries",
            "peer-reviewed libraries",
            "c++ standard"
        ],
        "year": [
            2010,
            2011,
            2013,
            2014,
            2015,
            2017,
            2018,
            2019,
            2020,
            2021
        ],
        "project": [
            0,
            9,
            9,
            0,
            7,
            8,
            7,
            0,
            4,
            9,
            11,
            9,
            8,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/5372385280131072",
        "name": "caMicroscope",
        "tech": [
            "python",
            "javascript",
            "mongodb",
            "tensorflow",
            "medical imaging"
        ],
        "cat": "",
        "top": [
            "machine learning",
            "distributed systems",
            "science and medicine",
            "data integration"
        ],
        "year": [
            2021,
            2020
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            5,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/6291016608382976",
        "name": "CASTOR",
        "tech": [
            "java",
            "scala",
            "bytecode"
        ],
        "cat": "",
        "top": [
            "testing",
            "software analysis",
            "optimization",
            "development",
            "automated program repair"
        ],
        "year": [
            2021
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/6086891878744064",
        "name": "Chapel",
        "tech": [
            "c",
            "python",
            "c++",
            "chapel",
            "high performance computing"
        ],
        "cat": "",
        "top": [
            "compilers",
            "programming languages",
            "distributed computing",
            "high performance computing",
            "parallel computing"
        ],
        "year": [
            2021,
            2020,
            2019,
            2017,
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            3,
            0,
            4,
            4,
            3,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/4766383010742272",
        "name": "Checkstyle",
        "tech": [
            "java",
            "antlr"
        ],
        "cat": "",
        "top": [
            "static code analysis\u200e",
            "code review tool",
            "coding standards",
            "coding conventions"
        ],
        "year": [
            2021,
            2020,
            2017,
            2014
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            3,
            0,
            0,
            5,
            0,
            0,
            3,
            2,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/6055505163714560",
        "name": "Cilium",
        "tech": [
            "c",
            "linux",
            "go",
            "kubernetes",
            "ebpf"
        ],
        "cat": "",
        "top": [
            "networking",
            "kernel",
            "cloud-native"
        ],
        "year": [
            2021
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/5667013157978112",
        "name": "CiviCRM LLC",
        "tech": [
            "mysql",
            "php",
            "angular",
            "javascript",
            "angularjs"
        ],
        "cat": "",
        "top": [
            "nonprofit",
            "crm",
            "nonprofits"
        ],
        "year": [
            2014,
            2015,
            2016,
            2018,
            2019,
            2020,
            2021
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            5,
            8,
            8,
            0,
            4,
            2,
            4,
            4,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/5332159690178560",
        "name": "CloudCV",
        "tech": [
            "python",
            "django",
            "docker",
            "angular",
            "aws"
        ],
        "cat": "",
        "top": [
            "machine learning",
            "artificial intelligence",
            "computer vision",
            "deep learning",
            "reinforcement learning"
        ],
        "year": [
            2021,
            2020,
            2019,
            2018,
            2017,
            2016,
            2015
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            2,
            4,
            5,
            4,
            3,
            3,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/4904398832009216",
        "name": "coala",
        "tech": [
            "django",
            "haskell",
            "python 3",
            "docker",
            "antlr"
        ],
        "cat": "",
        "top": [
            "devops",
            "static code analysis\u200e",
            "chat"
        ],
        "year": [
            2021,
            2019,
            2018,
            2017
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            9,
            14,
            10,
            0,
            4,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/5349298455183360",
        "name": "Continuous Delivery Foundation",
        "tech": [
            "jenkins",
            "tekton",
            "spinnaker",
            "ortelius",
            "screwdriver.cd"
        ],
        "cat": "",
        "top": [
            "developer tools",
            "continuous delivery",
            "great developer tooling"
        ],
        "year": [
            2021,
            2020
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            6,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/6618455117135872",
        "name": "DeepPavlov",
        "tech": [
            "python",
            "tensorflow",
            "docker",
            "python deep learning frameworks",
            "pytorch"
        ],
        "cat": "",
        "top": [
            "nlp",
            "conversational",
            "agent"
        ],
        "year": [
            2021
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/5400186335002624",
        "name": "Digital Impact Alliance (DIAL) at UN Foundation",
        "tech": [
            "python",
            "linux",
            "javascript",
            "android",
            "many more",
            "java",
            "php"
        ],
        "cat": "",
        "top": [
            "humanitarian",
            "nonprofit",
            "humanrights",
            "international",
            "global",
            "social good",
            "end user application",
            "charity"
        ],
        "year": [
            2018,
            2019,
            2020,
            2021
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            3,
            14,
            12,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/5833213695492096",
        "name": "Elm Tooling",
        "tech": [
            "functional programming",
            "typescript",
            "elm",
            "javascript",
            "haskell"
        ],
        "cat": "",
        "top": [
            "web",
            "linter",
            "tooling",
            "parser",
            "compilers",
            "programming languages",
            "functional programming",
            "web applications",
            "user interface"
        ],
        "year": [
            2017,
            2021
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            2,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/6046169112772608",
        "name": "FrameNet Brasil (UFJF)",
        "tech": [
            "python",
            "mysql",
            "javascript",
            "php"
        ],
        "cat": "",
        "top": [
            "natural language processing",
            "natural language understanding",
            "multilinguality",
            "multimodal communication"
        ],
        "year": [
            2021,
            2020
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            1,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/5211080233582592",
        "name": "GNU Mailman Project",
        "tech": [
            "python",
            "django",
            "restful api",
            "sqlalchemy"
        ],
        "cat": "",
        "top": [
            "web",
            "mail"
        ],
        "year": [
            2021
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/5675929577193472",
        "name": "Google FHIR SDK",
        "tech": [
            "android",
            "kotlin",
            "sqlite",
            "fhir",
            "materialui"
        ],
        "cat": "",
        "top": [
            "global health",
            "ai",
            "gis",
            "precision health",
            "enteprise analytics"
        ],
        "year": [
            2021
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            5,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/4979973948964864",
        "name": "gprMax",
        "tech": [
            "python",
            "cython",
            "cuda",
            "openmp",
            "mpi"
        ],
        "cat": "",
        "top": [
            "science",
            "engineering",
            "geophysics",
            "electromagnetics",
            "optimisation"
        ],
        "year": [
            2021,
            2019
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            4,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/5763186065670144",
        "name": "GRR Rapid Response",
        "tech": [
            "python 3",
            "angular",
            "typescript",
            "materialui",
            "backend"
        ],
        "cat": "",
        "top": [
            "computer security",
            "digital forensics"
        ],
        "year": [
            2021
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/5119642997096448",
        "name": "gVisor",
        "tech": [
            "linux",
            "c/c++",
            "golang",
            "posix"
        ],
        "cat": "",
        "top": [
            "virtualization",
            "sandbox",
            "kernel",
            "containers"
        ],
        "year": [
            2021
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/5630773431894016",
        "name": "Halide",
        "tech": [
            "llvm",
            "c++"
        ],
        "cat": "",
        "top": [
            "compilers",
            "computer vision",
            "graphics",
            "high-performance computing"
        ],
        "year": [
            2021
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/5753537857847296",
        "name": "Hydra Ecosystem",
        "tech": [
            "python",
            "postgresql",
            "javascript",
            "redis",
            "docker"
        ],
        "cat": "",
        "top": [
            "semantic web",
            "web services",
            "linked data",
            "knowledge graphs",
            "rest apis"
        ],
        "year": [
            2021,
            2020,
            2019
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            2,
            2,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/6193723385315328",
        "name": "Internet Archive",
        "tech": [
            "python",
            "javascript",
            "golang",
            "elasticsearch",
            "hadoop"
        ],
        "cat": "",
        "top": [
            "archiving"
        ],
        "year": [
            2021,
            2020,
            2019,
            2018,
            2017
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            5,
            2,
            3,
            2,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/5712237452328960",
        "name": "Java PathFinder",
        "tech": [
            "android",
            "java",
            "distributed systems",
            "jvm",
            "javajava"
        ],
        "cat": "",
        "top": [
            "model checking",
            "symbolic execution",
            "verification of concurrent systems",
            "program analysis",
            "jvm",
            "test input generation",
            "testing",
            "verification",
            "environment generation"
        ],
        "year": [
            2010,
            2011,
            2012,
            2013,
            2016,
            2017,
            2018,
            2019,
            2020,
            2021
        ],
        "project": [
            0,
            8,
            11,
            11,
            15,
            0,
            0,
            10,
            7,
            4,
            6,
            6,
            3,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/6595970359361536",
        "name": "Kiwix",
        "tech": [
            "python",
            "c/c++",
            "nodejs",
            "kotlin",
            "typescript"
        ],
        "cat": "",
        "top": [
            "offline access"
        ],
        "year": [
            2021,
            2020,
            2019,
            2018
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            2,
            3,
            3,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/5651367128989696",
        "name": "LabLua",
        "tech": [
            "lua",
            "c\u00e9u",
            "kernel"
        ],
        "cat": "",
        "top": [
            "scripting languages",
            "reactive languages"
        ],
        "year": [
            2021,
            2020,
            2019,
            2018,
            2017,
            2016,
            2015,
            2014
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            4,
            6,
            8,
            6,
            5,
            5,
            6,
            4,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/5144401537400832",
        "name": "Libre Space Foundation",
        "tech": [
            "python",
            "django",
            "machine learning",
            "sdr",
            "embedded systems"
        ],
        "cat": "",
        "top": [
            "space applications",
            "satellite data",
            "orbital dynamics",
            "space standards"
        ],
        "year": [
            2021,
            2020,
            2019
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            2,
            3,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/4875496487124992",
        "name": "MapAction",
        "tech": [
            "python",
            "data analysis",
            "gis",
            "apache airflow",
            "visualization"
        ],
        "cat": "",
        "top": [
            "humanitarian",
            "maps",
            "geospatial",
            "data processing",
            "google cloud"
        ],
        "year": [
            2021
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/6194875543846912",
        "name": "Media Cloud",
        "tech": [
            "python",
            "postgresql",
            "javascript",
            "react",
            "docker"
        ],
        "cat": "",
        "top": [
            "research",
            "media",
            "news-media",
            "media-analytics",
            "civic-tech"
        ],
        "year": [
            2021
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/5917807371354112",
        "name": "MediaPipe",
        "tech": [
            "python",
            "javascript",
            "android",
            "c++",
            "ios"
        ],
        "cat": "",
        "top": [
            "machine learning",
            "computer vision",
            "deep learning",
            "real-time",
            "ml-inference"
        ],
        "year": [
            2021
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            6,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/5759703384064000",
        "name": "MGGG Redistricting Lab",
        "tech": [
            "python",
            "javascript",
            "julia",
            "gis",
            "statistics"
        ],
        "cat": "",
        "top": [
            "statistics",
            "civic tech",
            "mapping and surveying",
            "graph algorithms"
        ],
        "year": [
            2021,
            2020
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            1,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/4693309712236544",
        "name": "mypy",
        "tech": [
            "python"
        ],
        "cat": "",
        "top": [
            "compilers"
        ],
        "year": [
            2021,
            2020
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            2,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/5963988000571392",
        "name": "Navidrome",
        "tech": [
            "react",
            "golang",
            "ffmpeg"
        ],
        "cat": "",
        "top": [
            "web",
            "music",
            "streaming"
        ],
        "year": [
            2021
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/6381326080409600",
        "name": "Open Roberta",
        "tech": [
            "python",
            "java",
            "go",
            "c++",
            "typescript",
            "javascript"
        ],
        "cat": "",
        "top": [
            "education",
            "robotics",
            "visual programming",
            "programming"
        ],
        "year": [
            2018,
            2019,
            2020
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            3,
            3,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/6276607395758080",
        "name": "openastronomy",
        "tech": [
            "python",
            "javascript",
            "julia",
            "numba",
            "spark"
        ],
        "cat": "",
        "top": [
            "astronomy",
            "solar physics",
            "high energy astrophysics",
            "astrophysics"
        ],
        "year": [
            2021
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            8,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/5769029704220672",
        "name": "OpenMined",
        "tech": [
            "python",
            "javascript",
            "rust",
            "pytorch",
            "hyperledger aries"
        ],
        "cat": "",
        "top": [
            "privacy",
            "encrypted computation",
            "federated learning",
            "structured transparency",
            "differential privacy"
        ],
        "year": [
            2021,
            2020
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            4,
            5,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/5738046581899264",
        "name": "Pharo Consortium",
        "tech": [
            "smalltalk",
            "roassal",
            "pharo",
            "spec"
        ],
        "cat": "",
        "top": [
            "compilers",
            "visualization",
            "programming languages",
            "ide",
            "virtual machines"
        ],
        "year": [
            2021,
            2019,
            2017
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            5,
            0,
            7,
            0,
            6,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/5646348627476480",
        "name": "Pidgin Instant Messenger",
        "tech": [
            "c",
            "gtk",
            "gstreamer"
        ],
        "cat": "",
        "top": [
            "web",
            "real time",
            "video",
            "chat",
            "voice"
        ],
        "year": [
            2021
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/5952433766793216",
        "name": "Pitivi",
        "tech": [
            "c",
            "python",
            "gtk",
            "gstreamer"
        ],
        "cat": "",
        "top": [
            "video processing",
            "filmmaking",
            "video editing"
        ],
        "year": [
            2021,
            2020,
            2019
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            3,
            2,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/5118711358291968",
        "name": "Plan 9 Foundation",
        "tech": [
            "c",
            "golang",
            "distributed systems",
            "concurrency"
        ],
        "cat": "",
        "top": [
            "operating systems",
            "distributed systems",
            "network programming"
        ],
        "year": [
            2021
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/6260986197049344",
        "name": "Point Cloud Library",
        "tech": [
            "python",
            "cuda",
            "cmake",
            "c++14",
            "computer vision"
        ],
        "cat": "",
        "top": [
            "robotics",
            "computer vision",
            "data structures",
            "2d/3d graphics",
            "gpu computing"
        ],
        "year": [
            2021,
            2020
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            3,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/5124239249637376",
        "name": "Postman",
        "tech": [
            "javascript",
            "node.js",
            "graphql",
            "openapi",
            "rest api"
        ],
        "cat": "",
        "top": [
            "productivity",
            "apis",
            "programming languages and development tools",
            "api management",
            "software development"
        ],
        "year": [
            2021,
            2020
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            9,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/5935335233552384",
        "name": "Project WikiLoop",
        "tech": [
            "python",
            "java",
            "mediawiki"
        ],
        "cat": "",
        "top": [
            "cultural heritage",
            "knowledge graphs",
            "computer-assisted translation"
        ],
        "year": [
            2021
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/5682513023860736",
        "name": "Qubes OS",
        "tech": [
            "c",
            "python",
            "shell",
            "ruby"
        ],
        "cat": "",
        "top": [
            "virtualization",
            "security",
            "privacy"
        ],
        "year": [
            2021,
            2020,
            2017
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            0,
            1,
            1,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/4838168020385792",
        "name": "React Native Elements",
        "tech": [
            "javascript",
            "react",
            "react native"
        ],
        "cat": "",
        "top": [
            "ui toolkit",
            "design system"
        ],
        "year": [
            2021
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/5679527786708992",
        "name": "ReactOS",
        "tech": [
            "c",
            "c++",
            "win32",
            "nt"
        ],
        "cat": "",
        "top": [
            "operating systems",
            "kernel",
            "drivers",
            "windows",
            "system programming",
            "applications"
        ],
        "year": [
            2011,
            2016,
            2017,
            2018,
            2019,
            2020,
            2021
        ],
        "project": [
            0,
            0,
            4,
            0,
            0,
            0,
            0,
            4,
            4,
            1,
            2,
            3,
            1,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/6240940410273792",
        "name": "Rocket.Chat",
        "tech": [
            "react",
            "nodejs",
            "docker",
            "kubernetes",
            "react native"
        ],
        "cat": "",
        "top": [
            "collaboration",
            "community",
            "instant messaging",
            "communication",
            "team"
        ],
        "year": [
            2021,
            2020,
            2019,
            2018,
            2017
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            4,
            7,
            15,
            7,
            12,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/5673937584783360",
        "name": "Samba",
        "tech": [
            "c",
            "smb",
            "cifs"
        ],
        "cat": "",
        "top": [
            "networking",
            "enterprise"
        ],
        "year": [
            2021,
            2020,
            2019,
            2017,
            2014,
            2013,
            2012,
            2011,
            2010,
            2009
        ],
        "project": [
            3,
            3,
            4,
            3,
            3,
            3,
            0,
            0,
            1,
            0,
            1,
            1,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/4852309401534464",
        "name": "Shaka Player",
        "tech": [
            "python",
            "javascript",
            "web development",
            "video codecs",
            "ui/ux"
        ],
        "cat": "",
        "top": [
            "web",
            "streaming",
            "video"
        ],
        "year": [
            2021
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/4577761535983616",
        "name": "SymbiFlow",
        "tech": [
            "python",
            "c/c++",
            "verilog",
            "fpga"
        ],
        "cat": "",
        "top": [
            "programming languages",
            "development tools",
            "open hardware"
        ],
        "year": [
            2021,
            2020,
            2019
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            3,
            1,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/4867306789797888",
        "name": "The Terasology Foundation",
        "tech": [
            "java",
            "opengl",
            "gradle",
            "kotlin",
            "lwjgl"
        ],
        "cat": "",
        "top": [
            "voxel",
            "games",
            "ai",
            "graphics / video / audio / virtual reality",
            "game engines"
        ],
        "year": [
            2021,
            2020,
            2019
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            9,
            8,
            4,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/5714570659758080",
        "name": "vitrivr",
        "tech": [
            "java",
            "kotlin",
            "tensorflow",
            "angular",
            "typescript"
        ],
        "cat": "",
        "top": [
            "databases",
            "web",
            "machine learning",
            "computer vision",
            "multimedia retrieval"
        ],
        "year": [
            2021,
            2018,
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            0,
            1,
            0,
            0,
            2,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/5197456597319680",
        "name": "Xiph.Org Foundation",
        "tech": [
            "rust",
            "assembly",
            "arm",
            "x86",
            "c language"
        ],
        "cat": "",
        "top": [
            "video",
            "video encode",
            "video decode",
            "multimedia"
        ],
        "year": [
            2021,
            2015,
            2009
        ],
        "project": [
            2,
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            0,
            0,
            0,
            0,
            3,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2021/organizations/5134539654955008",
        "name": "xrdesktop",
        "tech": [
            "c",
            "vulkan",
            "wayland",
            "glib",
            "openxr"
        ],
        "cat": "",
        "top": [
            "virtual reality",
            "graphics",
            "real time",
            "3dui",
            "window management"
        ],
        "year": [
            2021
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2020/organizations/6309633414660096",
        "name": "52\u00b0 North GmbH",
        "tech": [
            "python",
            "javascript",
            "android",
            "java",
            "react"
        ],
        "cat": "",
        "top": [
            "web services",
            "floating car data",
            "ogc standards",
            "trajectory analytics"
        ],
        "year": [
            2020
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2020/organizations/6043464124334080",
        "name": "Academy Software Foundation (ASWF)",
        "tech": [
            "c",
            "python",
            "opengl",
            "c++",
            "rust",
            "c/c++"
        ],
        "cat": "",
        "top": [
            "graphics",
            "media",
            "animation",
            "Visual Effects",
            "Film",
            "cloud computing",
            "2d/3d graphics",
            "filmmaking",
            "file formats",
            "color management"
        ],
        "year": [
            2020
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2020/organizations/6438212253253632",
        "name": "afl++",
        "tech": [
            "c/c++",
            "llvm",
            "fuzzing",
            "qemu",
            "sanitizers"
        ],
        "cat": "",
        "top": [
            "bug finding",
            "fuzzing",
            "software testing"
        ],
        "year": [
            2020
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2020/organizations/5480514170912768",
        "name": "Amahi",
        "tech": [
            "javascript",
            "android",
            "ruby on rails",
            "golang",
            "swift"
        ],
        "cat": "",
        "top": [
            "operating systems",
            "networking",
            "streaming",
            "web servers",
            "mobile-apps"
        ],
        "year": [
            2020,
            2019,
            2018,
            2017,
            2014
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            3,
            0,
            0,
            3,
            5,
            7,
            3,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2020/organizations/5270382996619264",
        "name": "AnitaB.org Open Source",
        "tech": [
            "python",
            "javascript",
            "android",
            "ios"
        ],
        "cat": "",
        "top": [
            "web",
            "mobile programming",
            "mobile",
            "web programming"
        ],
        "year": [
            2020
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            4,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2020/organizations/5459614121852928",
        "name": "appleseed",
        "tech": [
            "python",
            "opengl",
            "c++11"
        ],
        "cat": "",
        "top": [
            "simulation",
            "rendering",
            "computer graphics",
            "image synthesis",
            "animation"
        ],
        "year": [
            2014,
            2017,
            2018,
            2019,
            2020
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            0,
            3,
            3,
            2,
            3,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2020/organizations/6264664972853248",
        "name": "Arduino",
        "tech": [
            "c/c++",
            "golang",
            "arduino"
        ],
        "cat": "",
        "top": [
            "robotics",
            "interactivity",
            "electronics"
        ],
        "year": [
            2020
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2020/organizations/6683736474648576",
        "name": "BioGears",
        "tech": [
            "python",
            "c/c++",
            "cmake",
            "c++11"
        ],
        "cat": "",
        "top": [
            "computational biology",
            "mathematical software",
            "physiology",
            "pharmacological modeling"
        ],
        "year": [
            2020
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2020/organizations/5106421244362752",
        "name": "Canadian Centre for Computational Genomics",
        "tech": [
            "python",
            "javascript",
            "react",
            "nodejs",
            "r-project",
            "sql",
            "git"
        ],
        "cat": "",
        "top": [
            "visualization",
            "bioinformatics",
            "web development",
            "data science",
            "statistics",
            "web",
            "science",
            "genomics",
            "population genetics"
        ],
        "year": [
            2016,
            2018,
            2019,
            2020
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            0,
            3,
            4,
            5,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2020/organizations/5707287336845312",
        "name": "Catrobat",
        "tech": [
            "android",
            "java",
            "swift",
            "php",
            "ios"
        ],
        "cat": "",
        "top": [
            "education",
            "app development",
            "visual programming",
            "creativity tools",
            "gaming"
        ],
        "year": [
            2020,
            2019,
            2018,
            2017,
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            7,
            5,
            5,
            9,
            12,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2020/organizations/5983189996142592",
        "name": "Checker Framework",
        "tech": [
            "java"
        ],
        "cat": "",
        "top": [
            "software engineering",
            "verification",
            "bug finding",
            "programmer productivity",
            "type systems"
        ],
        "year": [
            2020,
            2019,
            2018,
            2017
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            5,
            3,
            5,
            2,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2020/organizations/5861737481371648",
        "name": "Cloud Native Computing Foundation (CNCF)",
        "tech": [
            "rust",
            "golang",
            "kubernetes",
            "cloud",
            "service mesh"
        ],
        "cat": "",
        "top": [
            "web",
            "cloud",
            "devops",
            "kubernetes",
            "service mesh"
        ],
        "year": [
            2020,
            2019,
            2018,
            2017
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            6,
            7,
            15,
            17,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2020/organizations/5450793232105472",
        "name": "Creative Commons",
        "tech": [
            "python",
            "javascript",
            "django",
            "vue.js",
            "wordpress"
        ],
        "cat": "",
        "top": [
            "web",
            "copyleft",
            "creative commons",
            "legal",
            "nonprofits"
        ],
        "year": [
            2020,
            2019,
            2013,
            2012,
            2010,
            2009
        ],
        "project": [
            2,
            3,
            0,
            1,
            2,
            0,
            0,
            0,
            0,
            0,
            5,
            5,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2020/organizations/5836893377265664",
        "name": "Drupal",
        "tech": [
            "javascript",
            "sql",
            "php",
            "symfony",
            "drupal 8"
        ],
        "cat": "",
        "top": [
            "web development",
            "mobile-apps",
            "object oriented programming",
            "cms",
            "apps"
        ],
        "year": [
            2020,
            2019,
            2018,
            2017,
            2016,
            2015,
            2014,
            2012,
            2011,
            2010,
            2009
        ],
        "project": [
            18,
            18,
            15,
            13,
            0,
            12,
            9,
            9,
            6,
            1,
            2,
            1,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2020/organizations/4573440532545536",
        "name": "Elastic",
        "tech": [
            "java",
            "react",
            "node.js",
            "golang"
        ],
        "cat": "",
        "top": [
            "security",
            "databases",
            "search",
            "observability"
        ],
        "year": [
            2020,
            2018
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            2,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2020/organizations/4824946267652096",
        "name": "Embox",
        "tech": [
            "c",
            "assembly",
            "gcc"
        ],
        "cat": "",
        "top": [
            "embedded systems",
            "rtos"
        ],
        "year": [
            2020
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2020/organizations/4857921046839296",
        "name": "Erlang Ecosystem Foundation",
        "tech": [
            "erlang",
            "elixir",
            "beam",
            "lfe"
        ],
        "cat": "",
        "top": [
            "instant messaging",
            "distributed systems",
            "language",
            "messaging",
            "soft real-time"
        ],
        "year": [
            2020
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2020/organizations/6477554824773632",
        "name": "Fedora Project",
        "tech": [
            "linux",
            "python 3",
            "web development",
            "rest",
            "linux distribution"
        ],
        "cat": "",
        "top": [
            "web development",
            "linux",
            "containers",
            "mobile",
            "distribution"
        ],
        "year": [
            2020,
            2019,
            2018,
            2017,
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            6,
            5,
            5,
            5,
            4,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2020/organizations/5791816890187776",
        "name": "GDevelop",
        "tech": [
            "javascript",
            "c/c++",
            "react",
            "web development",
            "game development"
        ],
        "cat": "",
        "top": [
            "compilers",
            "web",
            "graphics",
            "web applications",
            "gaming"
        ],
        "year": [
            2020
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2020/organizations/6028158437949440",
        "name": "GPAC",
        "tech": [
            "c",
            "javascript",
            "opengl"
        ],
        "cat": "",
        "top": [
            "streaming",
            "rendering",
            "multimedia",
            "packaging",
            "interactivity"
        ],
        "year": [
            2020,
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2020/organizations/6354766843609088",
        "name": "GraphQL Foundation",
        "tech": [
            "javascript",
            "react",
            "node.js",
            "graphql"
        ],
        "cat": "",
        "top": [
            "api",
            "data and databases",
            "graphql"
        ],
        "year": [
            2020
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2020/organizations/6487112334966784",
        "name": "Hazelcast",
        "tech": [
            "java",
            "distributed systems"
        ],
        "cat": "",
        "top": [
            "in memory data grid",
            "data streaming",
            "stream processing"
        ],
        "year": [
            2020
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2020/organizations/5992304050962432",
        "name": "Inclusive Design Institute",
        "tech": [
            "javascript",
            "node.js",
            "html",
            "css"
        ],
        "cat": "",
        "top": [
            "web",
            "web development",
            "web applications",
            "accessibility",
            "inclusion"
        ],
        "year": [
            2020,
            2018,
            2016,
            2014,
            2013,
            2012,
            2010
        ],
        "project": [
            0,
            5,
            0,
            11,
            10,
            6,
            0,
            4,
            0,
            5,
            0,
            2,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2020/organizations/5566516864483328",
        "name": "Kapitan",
        "tech": [
            "python 3",
            "kubernetes",
            "jsonnet",
            "jinja2",
            "terraform"
        ],
        "cat": "",
        "top": [
            "programming languages",
            "cloud",
            "great developer tooling",
            "kubernetes"
        ],
        "year": [
            2020,
            2019
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            1,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2020/organizations/5374310232883200",
        "name": "Kubeflow",
        "tech": [
            "python",
            "tensorflow",
            "kubernetes",
            "jupyter notebook",
            "kustomize"
        ],
        "cat": "",
        "top": [
            "machine learning",
            "cloud",
            "infrastructure",
            "kubernetes"
        ],
        "year": [
            2020
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2020/organizations/6500210139725824",
        "name": "Linkerd",
        "tech": [
            "rust",
            "golang",
            "kubernetes",
            "linkerd"
        ],
        "cat": "",
        "top": [
            "networking",
            "containers",
            "microservices",
            "service mesh",
            "cloud infrastructure"
        ],
        "year": [
            2020,
            2019
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            2,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2020/organizations/6088258989064192",
        "name": "lowRISC",
        "tech": [
            "python",
            "fpga",
            "c++",
            "risc-v",
            "systemverilog"
        ],
        "cat": "",
        "top": [
            "compilers",
            "open hardware"
        ],
        "year": [
            2020,
            2017,
            2016,
            2015
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            4,
            4,
            0,
            0,
            2,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2020/organizations/4588406077652992",
        "name": "MacPorts",
        "tech": [
            "c",
            "python",
            "tcl",
            "scripting",
            "buildbot",
            "html/javascript",
            "vue.js",
            "frontend",
            "react.js"
        ],
        "cat": "",
        "top": [
            "build tools",
            "libraries",
            "package management",
            "macos",
            "package manager",
            "mac os x",
            "command line"
        ],
        "year": [
            2009,
            2010,
            2011,
            2013,
            2014,
            2015,
            2017,
            2019,
            2020
        ],
        "project": [
            2,
            3,
            3,
            0,
            1,
            3,
            2,
            0,
            2,
            0,
            4,
            1,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2020/organizations/5420871000260608",
        "name": "Moira",
        "tech": [
            "javascript",
            "react",
            "golang",
            "typescript",
            "graphite"
        ],
        "cat": "",
        "top": [
            "monitoring",
            "devops",
            "devtools",
            "alerting",
            "sre"
        ],
        "year": [
            2020,
            2019
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            2,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2020/organizations/5169365365817344",
        "name": "Mozilla",
        "tech": [
            "python",
            "javascript",
            "html5",
            "rust",
            "web development"
        ],
        "cat": "",
        "top": [
            "open source",
            "web browser",
            "devtools",
            "information security"
        ],
        "year": [
            2020,
            2019,
            2018,
            2017,
            2016,
            2014,
            2013,
            2012,
            2011,
            2010
        ],
        "project": [
            0,
            10,
            11,
            16,
            20,
            25,
            0,
            13,
            21,
            16,
            14,
            11,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2020/organizations/6636241820319744",
        "name": "Neovim",
        "tech": [
            "c",
            "lua",
            "rpc"
        ],
        "cat": "",
        "top": [
            "editor",
            "programming"
        ],
        "year": [
            2020,
            2019,
            2018
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            2,
            1,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2020/organizations/5983819074633728",
        "name": "Netty",
        "tech": [
            "c",
            "java",
            "jni"
        ],
        "cat": "",
        "top": [
            "network",
            "nonblocking",
            "async"
        ],
        "year": [
            2020
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2020/organizations/5653128168341504",
        "name": "NV Access",
        "tech": [
            "python",
            "c++",
            "ui automation",
            "iaccessible2",
            "win32 api"
        ],
        "cat": "",
        "top": [
            "accessibility",
            "blindness",
            "screen reader",
            "braille",
            "text to speech"
        ],
        "year": [
            2020,
            2019
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            1,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2020/organizations/5551857973329920",
        "name": "Open Source Robotics Foundation",
        "tech": [
            "python",
            "ros",
            "gazebo",
            "c++"
        ],
        "cat": "",
        "top": [
            "robotics"
        ],
        "year": [
            2020,
            2019,
            2018,
            2016,
            2015,
            2014,
            2013
        ],
        "project": [
            0,
            0,
            0,
            0,
            3,
            5,
            6,
            7,
            0,
            4,
            7,
            7,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2020/organizations/6277255937916928",
        "name": "OpenEMR",
        "tech": [
            "mysql",
            "javascript",
            "html",
            "docker",
            "php"
        ],
        "cat": "",
        "top": [
            "health",
            "medicine",
            "medical records",
            "cloud",
            "medical practice management solution"
        ],
        "year": [
            2020
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2020/organizations/6405402461208576",
        "name": "OpenHMD",
        "tech": [
            "opengl",
            "opencv",
            "vulkan",
            "c99",
            "libusb"
        ],
        "cat": "",
        "top": [
            "virtual reality",
            "computer vision",
            "reverse engineering",
            "drivers",
            "xr"
        ],
        "year": [
            2020
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2020/organizations/6727913602285568",
        "name": "OpenRefine",
        "tech": [
            "javascript",
            "java"
        ],
        "cat": "",
        "top": [
            "data visualization",
            "web application",
            "real-time",
            "data integration"
        ],
        "year": [
            2020
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2020/organizations/5002697415065600",
        "name": "Percona",
        "tech": [
            "prometheus",
            "javascript",
            "shell script",
            "golang",
            "grafana"
        ],
        "cat": "",
        "top": [
            "testing",
            "data visualization",
            "automation",
            "load testing",
            "alerts"
        ],
        "year": [
            2020,
            2019
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            1,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2020/organizations/4722091934351360",
        "name": "Shogun",
        "tech": [
            "python",
            "machine learning",
            "c++",
            "data science",
            "matlab"
        ],
        "cat": "",
        "top": [
            "machine learning",
            "software engineering",
            "data science",
            "scientific computing",
            "user experience"
        ],
        "year": [
            2020
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2020/organizations/5461276207087616",
        "name": "The GNU Project",
        "tech": [
            "python",
            "javascript",
            "android",
            "c/c++",
            "scheme",
            "c",
            "lisp"
        ],
        "cat": "",
        "top": [
            "operating systems",
            "package managers",
            "astronomy",
            "reverse engineering",
            "http",
            "operating system",
            "free software"
        ],
        "year": [
            2009,
            2010,
            2012,
            2013,
            2014,
            2015,
            2016,
            2017,
            2018,
            2019,
            2020
        ],
        "project": [
            7,
            14,
            0,
            21,
            30,
            17,
            12,
            15,
            13,
            9,
            5,
            7,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2020/organizations/6331124088832000",
        "name": "The Wine Project",
        "tech": [
            "c",
            "opengl",
            "vulkan",
            "win32",
            "directx"
        ],
        "cat": "",
        "top": [
            "3d",
            "compatibility",
            "directx",
            "opengl",
            "vulkan"
        ],
        "year": [
            2020,
            2019,
            2018,
            2017,
            2016,
            2015,
            2014,
            2010,
            2009
        ],
        "project": [
            5,
            4,
            0,
            0,
            0,
            3,
            4,
            2,
            0,
            2,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2020/organizations/5144337383424000",
        "name": "webpack",
        "tech": [
            "javascript",
            "webpack"
        ],
        "cat": "",
        "top": [
            "web development"
        ],
        "year": [
            2020,
            2019,
            2018
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            2,
            1,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2020/organizations/5630325851422720",
        "name": "Wireshark",
        "tech": [
            "c/c++",
            "lua",
            "qt",
            "cmake",
            "pcap"
        ],
        "cat": "",
        "top": [
            "data visualization",
            "network monitoring",
            "network security"
        ],
        "year": [
            2020,
            2013
        ],
        "project": [
            0,
            0,
            0,
            0,
            3,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2020/organizations/4524333319323648",
        "name": "Xapian Search Engine Library",
        "tech": [
            "linux",
            "c++",
            "golang",
            "unicode",
            "swig"
        ],
        "cat": "",
        "top": [
            "machine learning",
            "search",
            "information retrieval",
            "linguistics",
            "indexing"
        ],
        "year": [
            2020,
            2019,
            2018,
            2017,
            2016,
            2014,
            2012,
            2011
        ],
        "project": [
            0,
            0,
            4,
            4,
            0,
            3,
            0,
            5,
            3,
            2,
            3,
            2,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2019/organizations/6331236958601216",
        "name": "52\u00b0North Initiative for Geospatial Open Source Software GmbH",
        "tech": [
            "javascript",
            "android",
            "java",
            "web"
        ],
        "cat": "",
        "top": [
            "earth observation",
            "floating car data",
            "ogc",
            "web processing",
            "sensorweb"
        ],
        "year": [
            2019,
            2017,
            2016,
            2015,
            2014,
            2013,
            2012
        ],
        "project": [
            0,
            0,
            0,
            4,
            4,
            4,
            6,
            3,
            1,
            0,
            2,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2019/organizations/5844178540429312",
        "name": "aimacode",
        "tech": [
            "python",
            "javascript",
            "java",
            "machine learning",
            "python 3"
        ],
        "cat": "",
        "top": [
            "education",
            "machine learning",
            "artificial intelligence",
            "open education"
        ],
        "year": [
            2019,
            2018,
            2017,
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            4,
            5,
            4,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2019/organizations/6340359469137920",
        "name": "API Client Tools at Google",
        "tech": [
            "rest",
            "openapi",
            "grpc",
            "protocol buffers",
            "rpc"
        ],
        "cat": "",
        "top": [
            "automation",
            "apis",
            "code generation",
            "api description"
        ],
        "year": [
            2019
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2019/organizations/5906507105828864",
        "name": "Bazel",
        "tech": [
            "c/c++",
            "java",
            "windows",
            "bazel"
        ],
        "cat": "",
        "top": [
            "build tools",
            "developer tools"
        ],
        "year": [
            2019,
            2017
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2019/organizations/5781930639884288",
        "name": "Berkman Klein Center for Internet and Society",
        "tech": [
            "python",
            "java",
            "ruby on rails",
            "elasticsearch",
            "meteor.js",
            "javascript",
            "elk",
            "d3",
            "go",
            "sql/nosql"
        ],
        "cat": "",
        "top": [
            "education",
            "research",
            "web",
            "internet freedom",
            "internet censorship",
            "digital rights",
            "internet access",
            "security and privacy",
            "law",
            "censorship",
            "law and policy"
        ],
        "year": [
            2016,
            2017,
            2018,
            2019
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            10,
            5,
            2,
            3,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2019/organizations/4661625682919424",
        "name": "Biomedical Informatics, Emory University",
        "tech": [
            "python",
            "java",
            "tensorflow",
            "deep learning",
            "medical imaging"
        ],
        "cat": "",
        "top": [
            "cloud",
            "distributed systems",
            "science and medicine",
            "precision medicine",
            "data integration"
        ],
        "year": [
            2019,
            2016,
            2015,
            2014
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            4,
            4,
            5,
            0,
            0,
            4,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2019/organizations/5526850200141824",
        "name": "Buildroot",
        "tech": [
            "python",
            "shell",
            "gnu make",
            "kconfig"
        ],
        "cat": "",
        "top": [
            "build tools",
            "embedded systems",
            "linux",
            "compilation"
        ],
        "year": [
            2019
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2019/organizations/6344880593305600",
        "name": "CBMI@UTHSC",
        "tech": [
            "python",
            "javascript",
            "flask",
            "tensorflow",
            "reactjs"
        ],
        "cat": "",
        "top": [
            "machine learning",
            "deep learning",
            "web applications",
            "sepsis prediction",
            "sepsis detection"
        ],
        "year": [
            2019
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2019/organizations/5344579304292352",
        "name": "CLiPS, University of Antwerp",
        "tech": [
            "python",
            "javascript",
            "mongodb"
        ],
        "cat": "",
        "top": [
            "text analytics",
            "machine learning",
            "artificial intelligence",
            "natural language processing",
            "text generation"
        ],
        "year": [
            2019,
            2018,
            2017
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            4,
            4,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2019/organizations/6093511005306880",
        "name": "Computational Biology @ University of Nebraska-Lincoln",
        "tech": [
            "postgresql",
            "javascript",
            "react",
            "webgl"
        ],
        "cat": "",
        "top": [
            "bioinformatics",
            "web application",
            "data science",
            "computational biology",
            "network biology"
        ],
        "year": [
            2019,
            2018,
            2017,
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            5,
            4,
            4,
            5,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2019/organizations/6223494952517632",
        "name": "D Programming Language",
        "tech": [
            "linux",
            "osx",
            "windows",
            "bsd",
            "dlang"
        ],
        "cat": "",
        "top": [
            "programming languages",
            "functional programming",
            "web programming",
            "object-oriented programming",
            "system programming"
        ],
        "year": [
            2019
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            5,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2019/organizations/5926253033422848",
        "name": "Developers Italia",
        "tech": [
            "python",
            "go",
            "node.js",
            "scala",
            "html/css/js"
        ],
        "cat": "",
        "top": [
            "open data",
            "web applications",
            "open source",
            "open government",
            "public code"
        ],
        "year": [
            2019,
            2018
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            3,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2019/organizations/6268499498893312",
        "name": "Earth Science Information Partners",
        "tech": [
            "python",
            "kubernetes",
            "deep learning",
            "jupyter",
            "gdal",
            "javascript",
            "dask",
            "xarray"
        ],
        "cat": "",
        "top": [
            "semantic web",
            "data visualisation",
            "earth observation",
            "cloud databases",
            "data-science",
            "data visualization",
            "earth data",
            "semantics",
            "discovery",
            "earth science"
        ],
        "year": [
            2018,
            2019
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            2,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2019/organizations/5379070022385664",
        "name": "FOSDEM",
        "tech": [
            "javascript",
            "ruby on rails",
            "grafana",
            "voctomix",
            "influxdb"
        ],
        "cat": "",
        "top": [
            "web development",
            "conference",
            "rails application",
            "video processing"
        ],
        "year": [
            2019,
            2017
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            2,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2019/organizations/5483378286002176",
        "name": "FOSSASIA",
        "tech": [
            "c",
            "python",
            "javascript",
            "java",
            "reactjs"
        ],
        "cat": "",
        "top": [
            "artificial intelligence",
            "open science",
            "search",
            "event management",
            "voice assistants"
        ],
        "year": [
            2019,
            2018,
            2017,
            2016,
            2015,
            2014,
            2012,
            2011
        ],
        "project": [
            0,
            0,
            3,
            6,
            0,
            9,
            17,
            18,
            51,
            32,
            14,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2019/organizations/5090343328940032",
        "name": "FrameNet Brasil at the Federal University of Juiz de Fora",
        "tech": [
            "python",
            "mysql",
            "javascript",
            "php"
        ],
        "cat": "",
        "top": [
            "natural language processing",
            "image processing",
            "multimodality",
            "natural language understanding",
            "machine translation"
        ],
        "year": [
            2019
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2019/organizations/4535509118877696",
        "name": "Genes, Genomes and Variation",
        "tech": [
            "python",
            "mysql",
            "javascript",
            "perl",
            "rest"
        ],
        "cat": "",
        "top": [
            "databases",
            "genomics",
            "scientific visualization",
            "data analysis"
        ],
        "year": [
            2019,
            2018,
            2017,
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            5,
            2,
            3,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2019/organizations/5661409025720320",
        "name": "GENIVI Alliance",
        "tech": [
            "yocto",
            "embedded",
            "automotive",
            "some/ip",
            "c",
            "linux",
            "c++",
            "qt"
        ],
        "cat": "",
        "top": [
            "embedded systems",
            "graphics",
            "automotive",
            "communication",
            "bigdata",
            "embedded",
            "cars",
            "automobile"
        ],
        "year": [
            2018,
            2019
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            2,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2019/organizations/4808868352229376",
        "name": "GNU Compiler Collection",
        "tech": [
            "c/c++",
            "gnu autotools"
        ],
        "cat": "",
        "top": [
            "compilers",
            "toolchain",
            "openmp"
        ],
        "year": [
            2019
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            6,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2019/organizations/5170270925488128",
        "name": "GNU Mailman",
        "tech": [
            "django",
            "python 3",
            "rest",
            "email"
        ],
        "cat": "",
        "top": [
            "email"
        ],
        "year": [
            2019,
            2016,
            2015
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            3,
            0,
            0,
            1,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2019/organizations/6049761981890560",
        "name": "Haskell.Org",
        "tech": [
            "haskell",
            "ghc",
            "cabal",
            "codeworld",
            "servant"
        ],
        "cat": "",
        "top": [
            "education",
            "compilers",
            "haskell",
            "functional programming",
            "build tools"
        ],
        "year": [
            2019
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            15,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2019/organizations/4934728610742272",
        "name": "Institut f\u00fcr Angewandte Informatik (InfAI) e.V.",
        "tech": [
            "javascript",
            "java",
            "a-frame",
            "neo4j",
            "htc vive"
        ],
        "cat": "",
        "top": [
            "virtual reality",
            "software quality",
            "visualization",
            "software analytics",
            "web"
        ],
        "year": [
            2019
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2019/organizations/6502123104108544",
        "name": "InterMine",
        "tech": [
            "python",
            "javascript",
            "java",
            "clojure",
            "r"
        ],
        "cat": "",
        "top": [
            "web",
            "open science",
            "bioinformatics",
            "biology",
            "data visualisation"
        ],
        "year": [
            2019,
            2018
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            6,
            6,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2019/organizations/6473524057735168",
        "name": "Internet Systems Consortium",
        "tech": [
            "python",
            "mysql",
            "javascript",
            "c/c++",
            "c99"
        ],
        "cat": "",
        "top": [
            "networking",
            "internet",
            "infrastructure",
            "dhcp",
            "dns"
        ],
        "year": [
            2019,
            2018
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            1,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2019/organizations/5987024522182656",
        "name": "JSK Robotics Laboratory / The University of Tokyo",
        "tech": [
            "ros",
            "lisp",
            "openhrp",
            "openrtm",
            "prolog"
        ],
        "cat": "",
        "top": [
            "robotics",
            "ros",
            "artificial intelligence"
        ],
        "year": [
            2017,
            2018
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            2,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2019/organizations/6612711935311872",
        "name": "KNIME",
        "tech": [
            "javascript",
            "java",
            "tensorflow"
        ],
        "cat": "",
        "top": [
            "machine learning",
            "data science",
            "deep learning",
            "image processing",
            "data analytics"
        ],
        "year": [
            2019
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2019/organizations/4556574457069568",
        "name": "Libvirt",
        "tech": [
            "c",
            "python",
            "xen",
            "kvm",
            "virtualization"
        ],
        "cat": "",
        "top": [
            "virtualization",
            "cloud",
            "libraries",
            "virtual machine"
        ],
        "year": [
            2019,
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            4,
            0,
            0,
            3,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2019/organizations/5012931375267840",
        "name": "LuaRocks",
        "tech": [
            "lua"
        ],
        "cat": "",
        "top": [
            "programming languages",
            "games",
            "package managers"
        ],
        "year": [
            2019,
            2018,
            2017
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            2,
            2,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2019/organizations/5681434444955648",
        "name": "Moodle",
        "tech": [
            "javascript",
            "sql",
            "php",
            "angular",
            "ionic"
        ],
        "cat": "",
        "top": [
            "education",
            "web applications",
            "e-learning",
            "school system",
            "learning management"
        ],
        "year": [
            2019,
            2018,
            2017,
            2016,
            2015,
            2014,
            2013,
            2012,
            2011,
            2009
        ],
        "project": [
            5,
            0,
            3,
            4,
            6,
            2,
            2,
            4,
            1,
            0,
            2,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2019/organizations/5873958367264768",
        "name": "Named Data Networking Project",
        "tech": [
            "javascript",
            "android",
            "java",
            "c++14",
            "c#"
        ],
        "cat": "",
        "top": [
            "networking",
            "informationc centric networking",
            "ipfs"
        ],
        "year": [
            2019
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2019/organizations/6409236987248640",
        "name": "Netfilter project",
        "tech": [
            "c",
            "linux kernel"
        ],
        "cat": "",
        "top": [
            "software defined networking",
            "network monitoring",
            "network security"
        ],
        "year": [
            2019,
            2018,
            2017,
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            2,
            3,
            3,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2019/organizations/5152196847468544",
        "name": "Open Astronomy",
        "tech": [
            "python",
            "c++",
            "julia",
            "numba"
        ],
        "cat": "",
        "top": [
            "astronomy",
            "visualisation",
            "solar physics",
            "high energy astrophysics",
            "orbital mechanics"
        ],
        "year": [
            2019
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            9,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2019/organizations/5559834475233280",
        "name": "Open Data Kit",
        "tech": [
            "android",
            "java"
        ],
        "cat": "",
        "top": [
            "global health",
            "mobile",
            "global development",
            "social good"
        ],
        "year": [
            2019,
            2018,
            2017
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            2,
            2,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2019/organizations/5607768440963072",
        "name": "phpMyAdmin",
        "tech": [
            "mysql",
            "javascript",
            "bootstrap",
            "php",
            "cakephp"
        ],
        "cat": "",
        "top": [
            "database",
            "web applications",
            "mysql",
            "developer",
            "administrator"
        ],
        "year": [
            2019,
            2018,
            2017,
            2015,
            2014,
            2013,
            2012,
            2011,
            2010
        ],
        "project": [
            0,
            6,
            7,
            5,
            6,
            6,
            4,
            0,
            3,
            4,
            2,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2019/organizations/5716618817044480",
        "name": "Project PANOPTES",
        "tech": [
            "python 3",
            "arduino",
            "cloud"
        ],
        "cat": "",
        "top": [
            "robotics",
            "image processing",
            "astronomy",
            "exoplanet"
        ],
        "year": [
            2019
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2019/organizations/5033715393101824",
        "name": "Read the Docs",
        "tech": [
            "python",
            "django",
            "documentation",
            "sphinx"
        ],
        "cat": "",
        "top": [
            "web",
            "documentation"
        ],
        "year": [
            2019,
            2018
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            2,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2019/organizations/6207728010133504",
        "name": "Ruby Science Foundation",
        "tech": [
            "c/c++",
            "machine learning",
            "ruby",
            "cuda",
            "ai"
        ],
        "cat": "",
        "top": [
            "scientific computing",
            "linear algebra",
            "scientific visualization",
            "data-science",
            "hpc"
        ],
        "year": [
            2019,
            2018,
            2017,
            2016,
            2015,
            2013
        ],
        "project": [
            0,
            0,
            0,
            0,
            4,
            0,
            5,
            4,
            3,
            4,
            2,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2019/organizations/5996747724161024",
        "name": "Salesforce",
        "tech": [
            "javascript",
            "react",
            "nodejs",
            "scala",
            "apache spark"
        ],
        "cat": "",
        "top": [
            "machine learning",
            "natural language processing",
            "web applications",
            "user interface",
            "cli"
        ],
        "year": [
            2019
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2019/organizations/5700571963588608",
        "name": "shogun.ml",
        "tech": [
            "python",
            "cmake",
            "c++11",
            "c++17",
            "swig"
        ],
        "cat": "",
        "top": [
            "machine learning",
            "software engineering",
            "data science",
            "scientific computing",
            "user experience"
        ],
        "year": [
            2019
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2019/organizations/5660544999096320",
        "name": "Software and Computational Systems Lab at LMU Munich",
        "tech": [
            "python",
            "javascript",
            "java"
        ],
        "cat": "",
        "top": [
            "software analysis",
            "software verification",
            "benchmarking",
            "smt solver",
            "result presentation"
        ],
        "year": [
            2019,
            2018
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            2,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2019/organizations/6614261546090496",
        "name": "The Center for Connected Learning and Computer-Based Modeling",
        "tech": [
            "javascript",
            "scala"
        ],
        "cat": "",
        "top": [
            "education",
            "research",
            "programming languages",
            "simulation"
        ],
        "year": [
            2019,
            2018,
            2017,
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            1,
            2,
            1,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2019/organizations/6559697677582336",
        "name": "The Perl Foundation",
        "tech": [
            "c",
            "perl",
            "regular expressions",
            "perl6",
            "perl5"
        ],
        "cat": "",
        "top": [
            "functional programming",
            "concurrency",
            "web services",
            "natural language understanding",
            "programming languages and development tools"
        ],
        "year": [
            2019,
            2014,
            2011,
            2010,
            2009
        ],
        "project": [
            8,
            8,
            6,
            0,
            0,
            5,
            0,
            0,
            0,
            0,
            4,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2019/organizations/6187982082539520",
        "name": "The Postgres Operator",
        "tech": [
            "postgresql",
            "golang",
            "kubernetes",
            "operator",
            "patroni"
        ],
        "cat": "",
        "top": [
            "databases",
            "cloud",
            "cloud databases",
            "cloud native",
            "database services"
        ],
        "year": [
            2019
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2019/organizations/5953843416793088",
        "name": "The Vega Project at the University of Washington",
        "tech": [
            "react",
            "d3",
            "typescript",
            "vega",
            "vega-lite",
            "javascript",
            "d3.js"
        ],
        "cat": "",
        "top": [
            "visualization",
            "data-science",
            "data visualization",
            "data science",
            "declarative language",
            "visualization grammar",
            "plotting tools"
        ],
        "year": [
            2018,
            2019
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            2,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2019/organizations/6043030627287040",
        "name": "Tokio",
        "tech": [
            "rust",
            "tokio_rs"
        ],
        "cat": "",
        "top": [
            "concurrency",
            "networking",
            "windows",
            "rust"
        ],
        "year": [
            2019
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2019/organizations/5098459072299008",
        "name": "Tungsten Fabric",
        "tech": [
            "python",
            "linux",
            "c/c++",
            "networking",
            "kubernetes"
        ],
        "cat": "",
        "top": [
            "security",
            "software defined networking",
            "routing",
            "multicloud"
        ],
        "year": [
            2019
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2019/organizations/4731456398557184",
        "name": "UCSC Xena",
        "tech": [
            "python",
            "javascript",
            "react",
            "clojure"
        ],
        "cat": "",
        "top": [
            "genomics",
            "bioinformatics",
            "scientific visualization",
            "cancer research"
        ],
        "year": [
            2019,
            2018,
            2017
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            1,
            1,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2019/organizations/4795917817872384",
        "name": "Xi Editor",
        "tech": [
            "rust",
            "swift"
        ],
        "cat": "",
        "top": [
            "ide",
            "text editor",
            "end user application",
            "text editing"
        ],
        "year": [
            2018,
            2019
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            1,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2019/organizations/6320987639906304",
        "name": "xpra",
        "tech": [
            "c",
            "python",
            "javascript",
            "cython",
            "compression",
            "remote access"
        ],
        "cat": "",
        "top": [
            "desktop",
            "video",
            "remote-access",
            "seamless",
            "graphics",
            "remote access"
        ],
        "year": [],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2019/organizations/5486812028469248",
        "name": "ZynAddSubFX",
        "tech": [
            "c/c++",
            "opengl",
            "ruby",
            "midi",
            "open-sound-control"
        ],
        "cat": "",
        "top": [
            "visualization",
            "music",
            "audio",
            "digital signal processing",
            "user experience"
        ],
        "year": [
            2019
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2018/organizations/5685665089978368",
        "name": "3DTK",
        "tech": [
            "c/c++",
            "ros",
            "opencv",
            "cmake",
            "boost"
        ],
        "cat": "",
        "top": [
            "robotics",
            "3d",
            "slam",
            "mapping",
            "point clouds"
        ],
        "year": [
            2018
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2018/organizations/5067792839606272",
        "name": "52\u00b0 North Initiative for Geospatial Open Source Software GmbH",
        "tech": [
            "javascript",
            "java",
            "spring",
            "r",
            "big data"
        ],
        "cat": "",
        "top": [
            "geoinformatics",
            "sensor web",
            "geoprocessing",
            "remote sensing",
            "geostatistics"
        ],
        "year": [
            2018
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2018/organizations/5082029850886144",
        "name": "Beam Community",
        "tech": [
            "xmpp",
            "erlang"
        ],
        "cat": "",
        "top": [
            "iot",
            "instant messaging",
            "real time",
            "distributed computing",
            "distributed databases"
        ],
        "year": [
            2018,
            2017,
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            6,
            7,
            6,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2018/organizations/5679790782676992",
        "name": "BeeWare Project",
        "tech": [
            "python",
            "javascript",
            "android",
            "java",
            "ios"
        ],
        "cat": "",
        "top": [
            "app development",
            "mobile",
            "cross desktop"
        ],
        "year": [
            2018,
            2017
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            2,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2018/organizations/5193342920949760",
        "name": "Boston University / XIA",
        "tech": [
            "c",
            "linux kernel",
            "xia",
            "advanced data structures",
            "ddos"
        ],
        "cat": "",
        "top": [
            "research",
            "computer networking",
            "future internet architecture"
        ],
        "year": [
            2018,
            2017,
            2016,
            2015
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            2,
            2,
            4,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2018/organizations/5114353707646976",
        "name": "Classical Language Toolkit",
        "tech": [
            "python",
            "javascript"
        ],
        "cat": "",
        "top": [
            "web",
            "natural language processing"
        ],
        "year": [
            2018,
            2017,
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            2,
            3,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2018/organizations/6032491081105408",
        "name": "Conversations.im",
        "tech": [
            "javascript",
            "android",
            "java",
            "gtk",
            "xmpp"
        ],
        "cat": "",
        "top": [
            "web",
            "desktop",
            "instant messaging",
            "mobile"
        ],
        "year": [
            2018,
            2017
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            3,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2018/organizations/4825444746526720",
        "name": "Eta",
        "tech": [
            "java",
            "haskell",
            "jvm"
        ],
        "cat": "",
        "top": [
            "compilers",
            "programming-tools",
            "functional-programming",
            "runtime systems"
        ],
        "year": [
            2018
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2018/organizations/6511795204259840",
        "name": "Free UK Genealogy",
        "tech": [
            "python",
            "mysql",
            "mongodb",
            "ruby on rails",
            "css/html"
        ],
        "cat": "",
        "top": [
            "web apps",
            "machine learning",
            "open data",
            "ai",
            "ui/ux"
        ],
        "year": [
            2018
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2018/organizations/4768790235578368",
        "name": "gRPC",
        "tech": [
            "distributed systems",
            "cloud",
            "microservices",
            "grpc"
        ],
        "cat": "",
        "top": [
            "middleware",
            "communications",
            "microservices",
            "infrastructure",
            "distributed networks"
        ],
        "year": [
            2018,
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            1,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2018/organizations/6603344982310912",
        "name": "Inria Foundation",
        "tech": [
            "c/c++",
            "qt",
            "asm",
            "webassembly",
            "communication protocol"
        ],
        "cat": "",
        "top": [
            "real-time",
            "scientific computing",
            "physics",
            "medical simulation",
            "medical research"
        ],
        "year": [
            2018
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2018/organizations/4682207855640576",
        "name": "Institute for Artificial Intelligence",
        "tech": [
            "python",
            "ros",
            "c++",
            "lisp",
            "unreal engine"
        ],
        "cat": "",
        "top": [
            "artificial intelligence",
            "robotics",
            "simulation",
            "perception",
            "unreal engine"
        ],
        "year": [
            2018,
            2017,
            2015,
            2014
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            2,
            2,
            0,
            5,
            6,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2018/organizations/5956298361274368",
        "name": "JGraphT",
        "tech": [
            "java"
        ],
        "cat": "",
        "top": [
            "mathematics",
            "algorithms",
            "data structures",
            "network analysis",
            "graphs"
        ],
        "year": [
            2018
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2018/organizations/4898832450060288",
        "name": "languagetool.org",
        "tech": [
            "javascript",
            "java",
            "machine learning",
            "tensorflow",
            "ai"
        ],
        "cat": "",
        "top": [
            "education",
            "artificial intelligence",
            "language",
            "nlp",
            "edtech"
        ],
        "year": [
            2018
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2018/organizations/6557734510002176",
        "name": "Mobile Robot Programming Toolkit (MRPT)",
        "tech": [
            "python",
            "c/c++",
            "cmake",
            "webs"
        ],
        "cat": "",
        "top": [
            "computer vision",
            "ai",
            "real-time",
            "slam",
            "robot"
        ],
        "year": [
            2018,
            2017,
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            4,
            1,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2018/organizations/4941292362530816",
        "name": "MovingBlocks",
        "tech": [
            "java",
            "opengl",
            "json",
            "blender",
            "github"
        ],
        "cat": "",
        "top": [
            "game",
            "voxel",
            "minecraft",
            "sandbox",
            "modding"
        ],
        "year": [
            2018,
            2017,
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            10,
            9,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2018/organizations/4806851430449152",
        "name": "Open States",
        "tech": [
            "python",
            "postgresql",
            "django",
            "react",
            "graphql"
        ],
        "cat": "",
        "top": [
            "web",
            "government",
            "civic tech",
            "scraping"
        ],
        "year": [
            2018,
            2017
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2018/organizations/5351751314046976",
        "name": "OpenCensus",
        "tech": [
            "python",
            "java",
            "go",
            "ruby",
            "node"
        ],
        "cat": "",
        "top": [
            "monitoring",
            "c++",
            "tracing",
            "php"
        ],
        "year": [
            2018
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2018/organizations/4660316541550592",
        "name": "OpenSIPS",
        "tech": [
            "c",
            "python",
            "mysql",
            "scripting"
        ],
        "cat": "",
        "top": [
            "voip",
            "telephony",
            "real-time-communications",
            "sip"
        ],
        "year": [
            2018
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2018/organizations/5214740582236160",
        "name": "OpnTec",
        "tech": [
            "python",
            "javascript",
            "android",
            "cloud",
            "emberjs"
        ],
        "cat": "",
        "top": [
            "web",
            "open event",
            "event solutions"
        ],
        "year": [
            2018
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2018/organizations/6376279188176896",
        "name": "OW2",
        "tech": [
            "java",
            "perl",
            "middleware",
            "bpm",
            "wiki"
        ],
        "cat": "",
        "top": [
            "security",
            "cloud",
            "middleware",
            "enterprise information systems"
        ],
        "year": [
            2018
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2018/organizations/4692141242580992",
        "name": "P2PSP.org",
        "tech": [
            "python",
            "javascript",
            "c/c++",
            "webrtc",
            "sockets"
        ],
        "cat": "",
        "top": [
            "real time",
            "video",
            "live streaming",
            "p2p",
            "distributed networks"
        ],
        "year": [
            2018,
            2017,
            2016,
            2015
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            2,
            2,
            1,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2018/organizations/5208530327961600",
        "name": "phpBB Forum Software",
        "tech": [
            "mysql",
            "javascript",
            "php",
            "html5/css3",
            "symfony"
        ],
        "cat": "",
        "top": [
            "collaboration",
            "community",
            "social",
            "communication",
            "forum"
        ],
        "year": [
            2018,
            2017,
            2014,
            2013,
            2012
        ],
        "project": [
            0,
            0,
            0,
            3,
            5,
            3,
            0,
            0,
            2,
            2,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2018/organizations/5852375185096704",
        "name": "PMD",
        "tech": [
            "java",
            "xml",
            "javacc",
            "antlr",
            "xpath"
        ],
        "cat": "",
        "top": [
            "code analysis",
            "code quality",
            "source code analyzer",
            "linter"
        ],
        "year": [
            2018,
            2017
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            1,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2018/organizations/6441884142534656",
        "name": "Pocket Science Lab",
        "tech": [
            "c",
            "android",
            "java",
            "firmware",
            "cad"
        ],
        "cat": "",
        "top": [
            "education",
            "science",
            "firmware",
            "school apps"
        ],
        "year": [
            2018
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2018/organizations/4933265605525504",
        "name": "Polly Labs",
        "tech": [
            "c/c++",
            "llvm",
            "polly",
            "isl",
            "ppcg"
        ],
        "cat": "",
        "top": [
            "compilers",
            "polyhedral model"
        ],
        "year": [
            2018,
            2017
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            3,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2018/organizations/5818041149423616",
        "name": "Probot",
        "tech": [
            "javascript",
            "github",
            "node"
        ],
        "cat": "",
        "top": [
            "automation",
            "development tools",
            "bot"
        ],
        "year": [
            2018
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2018/organizations/5331740188999680",
        "name": "Python HYDRA",
        "tech": [
            "python",
            "flask",
            "rdf",
            "hydra",
            "json/json-ld"
        ],
        "cat": "",
        "top": [
            "database",
            "apis",
            "semantic web",
            "functional-programming",
            "knowledge graph"
        ],
        "year": [
            2018
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2018/organizations/4724462213660672",
        "name": "Quill.org",
        "tech": [
            "postgresql",
            "javascript",
            "react",
            "ruby",
            "rails"
        ],
        "cat": "",
        "top": [
            "education",
            "web",
            "machine learning",
            "nlp",
            "edtech"
        ],
        "year": [
            2018
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2018/organizations/5729327995944960",
        "name": "Rspamd",
        "tech": [
            "c",
            "javascript",
            "machine learning",
            "lua"
        ],
        "cat": "",
        "top": [
            "high performance computing",
            "email",
            "spam filtering"
        ],
        "year": [
            2018,
            2017
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2018/organizations/5717023518621696",
        "name": "Ruby on Rails",
        "tech": [
            "ruby on rails",
            "ruby",
            "html"
        ],
        "cat": "",
        "top": [
            "web",
            "web development",
            "web applications"
        ],
        "year": [
            2018,
            2017,
            2015,
            2014,
            2013,
            2009
        ],
        "project": [
            4,
            0,
            0,
            0,
            5,
            7,
            6,
            0,
            2,
            2,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2018/organizations/4786317862895616",
        "name": "Scilab",
        "tech": [
            "c",
            "java",
            "c++",
            "scilab",
            "fortran"
        ],
        "cat": "",
        "top": [
            "mathematics",
            "science",
            "graphics",
            "numerical computation",
            "engineering",
            "vision",
            "user interface",
            "mechanics"
        ],
        "year": [
            2011,
            2012,
            2015,
            2016,
            2017,
            2018
        ],
        "project": [
            0,
            0,
            7,
            10,
            0,
            0,
            4,
            5,
            5,
            4,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2018/organizations/5132636779446272",
        "name": "Seastar",
        "tech": [
            "linux",
            "cpp",
            "framework",
            "dpdk",
            "tcp"
        ],
        "cat": "",
        "top": [
            "network",
            "high performance",
            "tcp",
            "app development",
            "framework"
        ],
        "year": [
            2018
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2018/organizations/5667370274127872",
        "name": "Space @ Virginia Tech",
        "tech": [
            "python",
            "mysql",
            "javascript",
            "mongodb",
            "d3"
        ],
        "cat": "",
        "top": [
            "web",
            "data visualization",
            "real time",
            "data analytics"
        ],
        "year": [
            2018
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2018/organizations/6199903000723456",
        "name": "Stemformatics",
        "tech": [
            "python",
            "postgresql",
            "javascript"
        ],
        "cat": "",
        "top": [
            "bioinformatics",
            "cloud",
            "web applications"
        ],
        "year": [
            2018
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2018/organizations/6275038890164224",
        "name": "Stony Brook University Biomedical Informatics",
        "tech": [
            "python",
            "javascript",
            "c++",
            "matlab",
            "big data",
            "apache spark",
            "hadoop"
        ],
        "cat": "",
        "top": [
            "deep learning",
            "biomedical data science",
            "cancer informatics",
            "medical imaging",
            "database",
            "big data",
            "biomedical informatics",
            "bioinformtics"
        ],
        "year": [
            2016,
            2017,
            2018
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            4,
            3,
            2,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2018/organizations/5918428024012800",
        "name": "Streetmix",
        "tech": [
            "postgresql",
            "javascript",
            "mongodb",
            "react",
            "redux"
        ],
        "cat": "",
        "top": [
            "web",
            "civic tech",
            "smart cities"
        ],
        "year": [
            2018
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2018/organizations/6321870005600256",
        "name": "Systers Community",
        "tech": [
            "python",
            "javascript",
            "android",
            "ruby on rails",
            "ios",
            "java",
            "mysql"
        ],
        "cat": "",
        "top": [
            "web apps",
            "community",
            "mobile applications",
            "web",
            "games",
            "mobile",
            "women in tech",
            "peace corps",
            "systers",
            "women in open source"
        ],
        "year": [
            2013,
            2014,
            2015,
            2016,
            2017,
            2018
        ],
        "project": [
            0,
            0,
            0,
            0,
            6,
            13,
            22,
            19,
            11,
            11,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2018/organizations/6265117784145920",
        "name": "TEAMMATES @ National University of Singapore",
        "tech": [
            "javascript",
            "java",
            "appengine"
        ],
        "cat": "",
        "top": [
            "education",
            "cloud",
            "web applications",
            "teaching"
        ],
        "year": [
            2018,
            2017,
            2016,
            2015
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            6,
            7,
            8,
            5,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2018/organizations/6475167723159552",
        "name": "The Qt Project",
        "tech": [
            "opengl",
            "qt",
            "qml",
            "c++11",
            "cpp"
        ],
        "cat": "",
        "top": [
            "graphics",
            "gis",
            "maps",
            "declarative language"
        ],
        "year": [
            2018
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2018/organizations/6308187447754752",
        "name": "TLA+",
        "tech": [
            "java",
            "ocaml",
            "tla+",
            "eclipse",
            "smt"
        ],
        "cat": "",
        "top": [
            "algorithms",
            "formal methods"
        ],
        "year": [
            2018
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2018/organizations/5088548537499648",
        "name": "ViSP",
        "tech": [
            "c/c++"
        ],
        "cat": "",
        "top": [
            "robotics",
            "computer vision"
        ],
        "year": [
            2018,
            2017
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            2,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2018/organizations/4651790628814848",
        "name": "WorldBrain.io - Verifying the Internet",
        "tech": [
            "javascript",
            "react",
            "browser extension",
            "datproject",
            "reactjs"
        ],
        "cat": "",
        "top": [
            "search",
            "fake-news",
            "misinformation",
            "decentralization",
            "bookmarking",
            "digital knowledge"
        ],
        "year": [
            2017,
            2018
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            3,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2018/organizations/4893771770626048",
        "name": "X.org Foundation",
        "tech": [
            "opengl",
            "vulkan",
            "x11",
            "wayland",
            "opencl"
        ],
        "cat": "",
        "top": [
            "3d acceleration",
            "media acceleration",
            "2d acceleration",
            "windowing system",
            "graphic stack"
        ],
        "year": [
            2018
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2018/organizations/5991099608858624",
        "name": "XBMC Foundation",
        "tech": [
            "python",
            "mysql",
            "c/c++",
            "github"
        ],
        "cat": "",
        "top": [
            "audio",
            "video",
            "home theater"
        ],
        "year": [
            2018,
            2017,
            2015,
            2012
        ],
        "project": [
            0,
            0,
            0,
            4,
            0,
            0,
            3,
            0,
            3,
            2,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2017/organizations/5933754749026304",
        "name": "Babel",
        "tech": [
            "javascript",
            "nodejs",
            "babel"
        ],
        "cat": "",
        "top": [
            "compilers",
            "ast",
            "minifier",
            "tc39"
        ],
        "year": [
            2017
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2017/organizations/6571413242642432",
        "name": "Cadasta",
        "tech": [
            "python",
            "django",
            "javasc",
            "javascipt"
        ],
        "cat": "",
        "top": [
            "web",
            "geospatial",
            "mapping",
            "land rights",
            "geo"
        ],
        "year": [
            2017
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2017/organizations/5054104644616192",
        "name": "Clojure",
        "tech": [
            "javascript",
            "clojure",
            "clojurescript",
            "jvm",
            "functional programming"
        ],
        "cat": "",
        "top": [
            "compilers",
            "functional programming",
            "programming language",
            "development tools",
            "build systems"
        ],
        "year": [
            2017,
            2015,
            2014,
            2013
        ],
        "project": [
            0,
            0,
            0,
            0,
            6,
            9,
            5,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2017/organizations/5510422639673344",
        "name": "CMU Sphinx",
        "tech": [
            "c",
            "python",
            "javascript",
            "cross-platform",
            "hidden markov models"
        ],
        "cat": "",
        "top": [
            "education",
            "real time",
            "user interface",
            "speech recognition",
            "pronunciation"
        ],
        "year": [
            2017
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            11,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2017/organizations/6180004551458816",
        "name": "Copyleft Games",
        "tech": [
            "c",
            "python",
            "javascript",
            "opengl",
            "xmpp"
        ],
        "cat": "",
        "top": [
            "education",
            "web",
            "graphics",
            "networking"
        ],
        "year": [
            2017,
            2016,
            2015,
            2014
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            5,
            8,
            2,
            2,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2017/organizations/4878856288731136",
        "name": "Discourse",
        "tech": [
            "ruby on rails",
            "ruby",
            "html/css",
            "ember",
            "javascipt"
        ],
        "cat": "",
        "top": [
            "web development",
            "community",
            "real time",
            "forum",
            "asynchronous"
        ],
        "year": [
            2017,
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            4,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2017/organizations/5851994006749184",
        "name": "Eclipse Vert.x",
        "tech": [
            "java",
            "kotlin",
            "reactive extensions",
            "microservices",
            "event-loop"
        ],
        "cat": "",
        "top": [
            "distributed",
            "high performance computing",
            "polyglot",
            "reactive",
            "unopionated"
        ],
        "year": [
            2017
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2017/organizations/4941941976334336",
        "name": "Environmental Data And Governance Initiative",
        "tech": [
            "python",
            "javascript",
            "ruby on rails",
            "google cloud",
            "go"
        ],
        "cat": "",
        "top": [
            "machine learning",
            "crawling",
            "api",
            "open data",
            "open science"
        ],
        "year": [
            2017
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2017/organizations/6004756195573760",
        "name": "Freifunk",
        "tech": [
            "c",
            "javascript",
            "shell script",
            "html/css",
            "lede/openwrt"
        ],
        "cat": "",
        "top": [
            "monitoring",
            "wireless",
            "user interface",
            "routing",
            "firmware development"
        ],
        "year": [
            2017,
            2016,
            2014,
            2010,
            2009
        ],
        "project": [
            10,
            8,
            0,
            0,
            0,
            8,
            0,
            8,
            12,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2017/organizations/4597892144693248",
        "name": "Frescobaldi",
        "tech": [
            "python",
            "pyqt"
        ],
        "cat": "",
        "top": [
            "music engraving"
        ],
        "year": [
            2017
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2017/organizations/6147412729004032",
        "name": "Green Navigation",
        "tech": [
            "javascript",
            "java",
            "react",
            "tensorflow",
            "apache spark"
        ],
        "cat": "",
        "top": [
            "web",
            "machine learning",
            "routing",
            "eletric mobility"
        ],
        "year": [
            2017,
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            5,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2017/organizations/6221940343701504",
        "name": "illumos.org",
        "tech": [
            "unix",
            "dtrace",
            "illumos",
            "openzfs",
            "zfs"
        ],
        "cat": "",
        "top": [
            "virtualization",
            "networking",
            "kernel",
            "drivers",
            "storage"
        ],
        "year": [
            2017
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2017/organizations/6184001823834112",
        "name": "K-9 Mail",
        "tech": [
            "android",
            "java"
        ],
        "cat": "",
        "top": [
            "email",
            "communication"
        ],
        "year": [
            2017,
            2011
        ],
        "project": [
            0,
            0,
            4,
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2017/organizations/5279287632461824",
        "name": "Liquid Galaxy Project",
        "tech": [
            "javascript",
            "ros",
            "gis",
            "cesiumjs"
        ],
        "cat": "",
        "top": [
            "virtual reality",
            "graphics",
            "visualisation",
            "geospatial",
            "webvr"
        ],
        "year": [
            2017,
            2016,
            2015,
            2014,
            2013,
            2012,
            2011
        ],
        "project": [
            0,
            0,
            3,
            3,
            3,
            5,
            6,
            4,
            3,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2017/organizations/5026327212064768",
        "name": "Microkernel devroom",
        "tech": [
            "c",
            "c++",
            "rust",
            "arm",
            "x86"
        ],
        "cat": "",
        "top": [
            "virtualization",
            "desktop",
            "microkernel",
            "components",
            "ipc"
        ],
        "year": [
            2017
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2017/organizations/4814565460148224",
        "name": "Mono Project",
        "tech": [
            "c",
            "c#",
            ".net",
            "f#"
        ],
        "cat": "",
        "top": [
            "web development",
            "programming tools",
            "ide",
            "mobile development",
            "compiler"
        ],
        "year": [
            2017,
            2015,
            2014,
            2013,
            2012,
            2011,
            2009
        ],
        "project": [
            6,
            0,
            13,
            12,
            14,
            12,
            13,
            0,
            9,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2017/organizations/5603880054292480",
        "name": "Nmap Security Scanner",
        "tech": [
            "c",
            "python",
            "c/c++",
            "lua",
            "c++"
        ],
        "cat": "",
        "top": [
            "security",
            "networking",
            "linux",
            "ipv6",
            "network mapping"
        ],
        "year": [
            2017,
            2016,
            2015,
            2014,
            2013,
            2012,
            2011,
            2010,
            2009
        ],
        "project": [
            6,
            8,
            7,
            4,
            3,
            4,
            5,
            5,
            4,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2017/organizations/6015282623545344",
        "name": "Open Detection",
        "tech": [
            "opencv",
            "c++",
            "caffe",
            "pcl"
        ],
        "cat": "",
        "top": [
            "computer vision",
            "ai"
        ],
        "year": [
            2017,
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            2,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2017/organizations/5718999941775360",
        "name": "oVirt",
        "tech": [
            "python",
            "java",
            "kvm"
        ],
        "cat": "",
        "top": [
            "virtualization",
            "enterprise application"
        ],
        "year": [
            2017,
            2014
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            0,
            2,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2017/organizations/5721528872206336",
        "name": "ownCloud",
        "tech": [
            "javascript",
            "android",
            "qt",
            "php",
            "ios"
        ],
        "cat": "",
        "top": [
            "cloud",
            "sync",
            "file share"
        ],
        "year": [
            2017,
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            3,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2017/organizations/6491731667189760",
        "name": "Physical Web Project",
        "tech": [
            "beacon",
            "web bluetooth",
            "physical web",
            "bluetooth"
        ],
        "cat": "",
        "top": [
            "internet of things",
            "beacons"
        ],
        "year": [
            2017,
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            5,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2017/organizations/5827042528460800",
        "name": "Portland State University",
        "tech": [
            "open hardware",
            "language-agnostic"
        ],
        "cat": "",
        "top": [
            "new projects",
            "academic projects",
            "individual projects"
        ],
        "year": [
            2017,
            2016,
            2015,
            2014,
            2013,
            2012,
            2011,
            2010,
            2009
        ],
        "project": [
            6,
            5,
            11,
            8,
            8,
            11,
            11,
            6,
            7,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2017/organizations/4704476053110784",
        "name": "Shogun Machine Learning Toolbox",
        "tech": [
            "python",
            "c/c++",
            "machine learning",
            "cmake",
            "swig"
        ],
        "cat": "",
        "top": [
            "machine learning",
            "software engineering",
            "bioinformatics",
            "statistics",
            "fast algorithms"
        ],
        "year": [
            2017,
            2016,
            2014,
            2013,
            2012
        ],
        "project": [
            0,
            0,
            0,
            8,
            8,
            8,
            0,
            3,
            4,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2017/organizations/5019976297611264",
        "name": "Sigmah",
        "tech": [
            "postgresql",
            "java",
            "gwt"
        ],
        "cat": "",
        "top": [
            "humanitarian",
            "project-management"
        ],
        "year": [
            2017,
            2016,
            2014,
            2013,
            2012
        ],
        "project": [
            0,
            0,
            0,
            2,
            3,
            3,
            0,
            1,
            2,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2017/organizations/6470814639587328",
        "name": "Tiled",
        "tech": [
            "github",
            "c++",
            "qt",
            "git"
        ],
        "cat": "",
        "top": [
            "game",
            "game development",
            "edit",
            "editing",
            "level"
        ],
        "year": [
            2017
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2017/organizations/6543856732471296",
        "name": "TimVideos",
        "tech": [
            "c",
            "python",
            "verilog",
            "fpga",
            "vhdl"
        ],
        "cat": "",
        "top": [
            "hardware",
            "embedded",
            "video",
            "fpga"
        ],
        "year": [
            2013,
            2014,
            2016,
            2017,
            2018
        ],
        "project": [
            0,
            0,
            0,
            0,
            2,
            7,
            0,
            2,
            2,
            2,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2017/organizations/4513544758362112",
        "name": "Urban Energy Systems Laboratory, Empa",
        "tech": [
            "python",
            "gis",
            "fast fluid dynamics"
        ],
        "cat": "",
        "top": [
            "distributed energy systems",
            "modeling & optimization",
            "data portal"
        ],
        "year": [
            2017,
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            3,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2017/organizations/6070843662663680",
        "name": "WSO2",
        "tech": [
            "java",
            "web services",
            "middleware",
            "soa",
            "distributed computing"
        ],
        "cat": "",
        "top": [
            "security",
            "iot",
            "cloud",
            "micro services",
            "api management"
        ],
        "year": [
            2017,
            2016,
            2015,
            2014
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            5,
            9,
            11,
            9,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2017/organizations/5262324659126272",
        "name": "wxWidgets",
        "tech": [
            "c++",
            "gtk+",
            "win32",
            "cocoa"
        ],
        "cat": "",
        "top": [
            "desktop",
            "cross-platform",
            "gui"
        ],
        "year": [
            2017,
            2014,
            2011,
            2010,
            2009
        ],
        "project": [
            3,
            5,
            3,
            0,
            0,
            6,
            0,
            0,
            2,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2017/organizations/5748328394391552",
        "name": "Xen Project",
        "tech": [
            "linux",
            "qemu",
            "free/netbsd",
            "asm/c/c++",
            "ocaml"
        ],
        "cat": "",
        "top": [
            "virtualization",
            "security",
            "cloud computing",
            "unikernels",
            "embedded/automotive"
        ],
        "year": [
            2017,
            2014
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            5,
            0,
            0,
            2,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2017/organizations/4744852235354112",
        "name": "Zenodo",
        "tech": [
            "python",
            "postgresql",
            "flask",
            "angularjs",
            "elasticsearch"
        ],
        "cat": "",
        "top": [
            "web",
            "machine learning",
            "open science",
            "content management",
            "digital library"
        ],
        "year": [
            2017
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2016/organizations/6488526010974208",
        "name": "ArchC",
        "tech": [
            "python",
            "c++",
            "archc"
        ],
        "cat": "",
        "top": [
            "computer architecture",
            "processor design",
            "simulators"
        ],
        "year": [
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2016/organizations/5175650340044800",
        "name": "ASCEND",
        "tech": [
            "c",
            "python",
            "c/c++"
        ],
        "cat": "",
        "top": [
            "engineering",
            "simulation",
            "system modelling",
            "mathematical software",
            "solver"
        ],
        "year": [
            2016,
            2015,
            2012,
            2011,
            2010,
            2009
        ],
        "project": [
            5,
            4,
            6,
            6,
            0,
            0,
            5,
            3,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2016/organizations/6650532982685696",
        "name": "BioJS",
        "tech": [
            "python",
            "javascript"
        ],
        "cat": "",
        "top": [
            "visualization",
            "bioinformatics",
            "javascript",
            "coding standards",
            "life sciences"
        ],
        "year": [
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2016/organizations/4929075730710528",
        "name": "BuildmLearn",
        "tech": [
            "python",
            "django",
            "bootstrap",
            "android"
        ],
        "cat": "",
        "top": [
            "education",
            "mlearning",
            "mobile app",
            "web apps"
        ],
        "year": [
            2016,
            2015,
            2014
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            3,
            6,
            4,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2016/organizations/4955769220890624",
        "name": "Celluloid",
        "tech": [
            "ruby",
            "multi-threading",
            "multi-core",
            "zeromq",
            "high-resolution timers"
        ],
        "cat": "",
        "top": [
            "concurrency",
            "parallel",
            "evented",
            "distributed",
            "actor model"
        ],
        "year": [
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2016/organizations/5902411419877376",
        "name": "Computational Science and Engineering at TU Wien",
        "tech": [
            "javascript",
            "java",
            "c++",
            "html",
            "css"
        ],
        "cat": "",
        "top": [
            "visualization",
            "internet of things",
            "simulation",
            "science and enineering",
            "mesh generation"
        ],
        "year": [
            2016,
            2014,
            2013,
            2012,
            2011
        ],
        "project": [
            0,
            0,
            3,
            9,
            12,
            14,
            0,
            10,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2016/organizations/6020075270176768",
        "name": "CVXPY",
        "tech": [
            "python"
        ],
        "cat": "",
        "top": [
            "optimization",
            "dsl",
            "convex optimization"
        ],
        "year": [
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2016/organizations/4688223091556352",
        "name": "D Foundation",
        "tech": [
            "c++",
            "dlang"
        ],
        "cat": "",
        "top": [
            "compilers"
        ],
        "year": [
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            4,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2016/organizations/6313893177589760",
        "name": "dbpediaspotlight",
        "tech": [
            "python",
            "java",
            "scala",
            "rdf",
            "nosql"
        ],
        "cat": "",
        "top": [
            "big data",
            "data science",
            "natural language processing",
            "semantic web"
        ],
        "year": [
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            8,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2016/organizations/5457125316755456",
        "name": "Distributed and Unified Numerics Environment (DUNE)",
        "tech": [
            "python",
            "c++",
            "cmake"
        ],
        "cat": "",
        "top": [
            "mathematics",
            "scientific computing",
            "physics",
            "high performance computing",
            "partial differential equations"
        ],
        "year": [
            2016,
            2013
        ],
        "project": [
            0,
            0,
            0,
            0,
            2,
            0,
            0,
            2,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2016/organizations/4603925500002304",
        "name": "FOSDEM VZW",
        "tech": [
            "postgresql",
            "ruby on rails",
            "git"
        ],
        "cat": "",
        "top": [
            "web",
            "programming languages",
            "programming tools",
            "ruby",
            "programming"
        ],
        "year": [
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2016/organizations/6393779032424448",
        "name": "Gambit - Software Tools for Game Theory",
        "tech": [
            "javascript"
        ],
        "cat": "",
        "top": [
            "graphics",
            "academic projects",
            "game theory"
        ],
        "year": [
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2016/organizations/5865050841546752",
        "name": "Ganeti",
        "tech": [
            "python",
            "xen",
            "haskell",
            "kvm",
            "virtualization"
        ],
        "cat": "",
        "top": [
            "virtualization",
            "automation"
        ],
        "year": [
            2016,
            2015,
            2014,
            2013
        ],
        "project": [
            0,
            0,
            0,
            0,
            2,
            2,
            1,
            1,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2016/organizations/5632763172487168",
        "name": "GitHub",
        "tech": [
            "ruby",
            "node.js",
            "git",
            "atom",
            "c#"
        ],
        "cat": "",
        "top": [
            "collaboration",
            "version control",
            "git",
            "editor"
        ],
        "year": [
            2016,
            2015
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            5,
            4,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2016/organizations/5800194151022592",
        "name": "gnss-sdr",
        "tech": [
            "c/c++",
            "c++11",
            "c++14",
            "gnss"
        ],
        "cat": "",
        "top": [
            "geolocation",
            "navigation",
            "software defined radio",
            "communications"
        ],
        "year": [
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2016/organizations/5849050746191872",
        "name": "Health Information Systems Programme",
        "tech": [
            "javascript",
            "android",
            "java",
            "gradle",
            "reactjs"
        ],
        "cat": "",
        "top": [
            "gis",
            "mobile",
            "data processing",
            "e-health",
            "global health and development"
        ],
        "year": [
            2016,
            2014,
            2013
        ],
        "project": [
            0,
            0,
            0,
            0,
            4,
            5,
            0,
            6,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2016/organizations/5096012251136000",
        "name": "Indic Project",
        "tech": [
            "python",
            "javascript",
            "android",
            "ruby on rails",
            "c++"
        ],
        "cat": "",
        "top": [
            "natural language processing",
            "language techology",
            "input methods"
        ],
        "year": [
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            7,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2016/organizations/6563422992859136",
        "name": "International Neuroinformatics Coordinating Facility",
        "tech": [
            "python",
            "javascript",
            "java",
            "c++",
            "gpu"
        ],
        "cat": "",
        "top": [
            "visualization",
            "big data",
            "data science",
            "simulation",
            "neuroscience"
        ],
        "year": [
            2016,
            2015,
            2014,
            2013,
            2012,
            2011
        ],
        "project": [
            0,
            0,
            2,
            6,
            6,
            12,
            12,
            12,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2016/organizations/5754903989321728",
        "name": "jQuery Foundation",
        "tech": [
            "javascript",
            "html5",
            "css",
            "jquery"
        ],
        "cat": "",
        "top": [
            "unit testing",
            "software testing",
            "framework development",
            "user interface components",
            "event handling"
        ],
        "year": [
            2016,
            2015
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            7,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2016/organizations/5678701068943360",
        "name": "KolibriOS",
        "tech": [
            "fasm",
            "flat assembler",
            "x86 assembly",
            "i386",
            "i586"
        ],
        "cat": "",
        "top": [
            "operating systems",
            "hardware",
            "desktop",
            "drivers",
            "lowlevel"
        ],
        "year": [
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            4,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2016/organizations/4739150934704128",
        "name": "McGill Space Institute",
        "tech": [
            "python",
            "sql",
            "big data",
            "databases"
        ],
        "cat": "",
        "top": [
            "astronomy",
            "space"
        ],
        "year": [
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2016/organizations/5954860486754304",
        "name": "MIT Media Lab",
        "tech": [
            "android",
            "java",
            "html/javascript"
        ],
        "cat": "",
        "top": [
            "education",
            "educational technology"
        ],
        "year": [
            2016,
            2015
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            6,
            5,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2016/organizations/6377072951820288",
        "name": "ModSecurity",
        "tech": [
            "waf",
            "web application firewall"
        ],
        "cat": "",
        "top": [
            "web application security"
        ],
        "year": [
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2016/organizations/5166380995313664",
        "name": "Open Ephys",
        "tech": [
            "c++",
            "juce"
        ],
        "cat": "",
        "top": [
            "visualization",
            "neuroscience",
            "electrophysiology",
            "ui",
            "signal processing"
        ],
        "year": [
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2016/organizations/5672889575538688",
        "name": "OpenKeychain (OpenPGP for Android)",
        "tech": [
            "android",
            "openpgp"
        ],
        "cat": "",
        "top": [
            "security",
            "e-mail",
            "encryption"
        ],
        "year": [
            2016,
            2015,
            2014
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            2,
            2,
            2,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2016/organizations/6400146589876224",
        "name": "Orange \u2013 Data Mining Fruitful & Fun",
        "tech": [
            "python",
            "cython",
            "machine learning",
            "qt"
        ],
        "cat": "",
        "top": [
            "visualization",
            "machine learning",
            "data mining",
            "bioinformatics",
            "gui toolkit"
        ],
        "year": [
            2016,
            2012,
            2011
        ],
        "project": [
            0,
            0,
            3,
            3,
            0,
            0,
            0,
            5,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2016/organizations/4845666660515840",
        "name": "OSU Open Source Lab",
        "tech": [
            "python",
            "javascript",
            "ruby",
            "rest"
        ],
        "cat": "",
        "top": [
            "virtualization",
            "infrastructure"
        ],
        "year": [
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2016/organizations/5191954035900416",
        "name": "Peragro",
        "tech": [
            "python",
            "javascript",
            "django",
            "blender",
            "celery"
        ],
        "cat": "",
        "top": [
            "web",
            "games",
            "analyzing",
            "transcoding",
            "pipeline automation"
        ],
        "year": [
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2016/organizations/6066521583386624",
        "name": "PLASMA-UMass",
        "tech": [
            "javascript",
            "c/c++",
            "go",
            "scala"
        ],
        "cat": "",
        "top": [
            "operating systems",
            "software engineering",
            "programming languages",
            "programming tools",
            "runtime systems"
        ],
        "year": [
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2016/organizations/4609839401533440",
        "name": "PRISM Model Checker",
        "tech": [
            "java",
            "c++"
        ],
        "cat": "",
        "top": [
            "verification",
            "science",
            "probabilistic models"
        ],
        "year": [
            2016,
            2014,
            2013
        ],
        "project": [
            0,
            0,
            0,
            0,
            2,
            8,
            0,
            5,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2016/organizations/6723762711953408",
        "name": "Robocomp",
        "tech": [
            "python",
            "c++",
            "cmake",
            "zeroc ice",
            "gnu/linux"
        ],
        "cat": "",
        "top": [
            "robotics",
            "computer vision",
            "framework"
        ],
        "year": [
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            5,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2016/organizations/6477188102619136",
        "name": "Soletta Project",
        "tech": [
            "c",
            "python",
            "javascript",
            "machine learning",
            "networking"
        ],
        "cat": "",
        "top": [
            "robotics",
            "internet of things",
            "drones",
            "portable",
            "makers"
        ],
        "year": [
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2016/organizations/5269666368847872",
        "name": "The Monarch Initiative",
        "tech": [
            "javascript",
            "semantic web",
            "text mining",
            "named entity recognition",
            "ontologies"
        ],
        "cat": "",
        "top": [
            "embeddable widget",
            "rare disease",
            "data refinement"
        ],
        "year": [
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2016/organizations/6356852245790720",
        "name": "Timelab Technologies Ltd.",
        "tech": [
            "python",
            "javascript"
        ],
        "cat": "",
        "top": [
            "mathematics",
            "astronomy",
            "algorithm prototyping/visualization",
            "time series"
        ],
        "year": [
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2016/organizations/6601174413213696",
        "name": "Unitex/GramLab",
        "tech": [
            "java",
            "c++"
        ],
        "cat": "",
        "top": [
            "natural language processing",
            "local grammars",
            "finite state automata",
            "corpus annotation",
            "multilingual language resources"
        ],
        "year": [
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2016/organizations/5126842331693056",
        "name": "Vert.x",
        "tech": [
            "javascript",
            "java",
            "groovy",
            "micro-services",
            "reactive"
        ],
        "cat": "",
        "top": [
            "micro services",
            "high performance computing"
        ],
        "year": [
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    {
        "url": "https://summerofcode.withgoogle.com/archive/2016/organizations/4886349127614464",
        "name": "Wayland",
        "tech": [
            "c",
            "opengl",
            "wayland",
            "xml",
            "kms"
        ],
        "cat": "",
        "top": [
            "graphics",
            "video",
            "window system",
            "display"
        ],
        "year": [
            2016
        ],
        "project": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    }
]


  
  