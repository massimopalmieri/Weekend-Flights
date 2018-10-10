const airports = [
  {
    "label": "Albania",
    "options": [
      {
        "value": "Albania",
        "label": "Albania (all airports)",
        "name": "AL",
        "ports": "TIA",
        "country": "AL"
      },
      {
        "value": "Tirana",
        "label": "Tirana",
        "name": "TIA",
        "ports": "TIA",
        "country": "AL"
      }
    ]
  },
  {
    "label": "Armenia",
    "options": [
      {
        "value": "Armenia",
        "label": "Armenia (all airports)",
        "name": "AM",
        "ports": "EVN_LWN",
        "country": "AM"
      },
      {
        "value": "Yerevan",
        "label": "Yerevan",
        "name": "EVN",
        "ports": "EVN",
        "country": "AM"
      },
      {
        "value": "Gyumri",
        "label": "Gyumri",
        "name": "LWN",
        "ports": "LWN",
        "country": "AM"
      }
    ]
  },
  {
    "label": "Austria",
    "options": [
      {
        "value": "Austria",
        "label": "Austria (all airports)",
        "name": "AT",
        "ports": "GRZ_INN_LNZ_SZG_VIE_KLU",
        "country": "AT"
      },
      {
        "value": "Graz",
        "label": "Graz",
        "name": "GRZ",
        "ports": "GRZ",
        "country": "AT"
      },
      {
        "value": "Innsbruck",
        "label": "Innsbruck",
        "name": "INN",
        "ports": "INN",
        "country": "AT"
      },
      {
        "value": "Linz",
        "label": "Linz",
        "name": "LNZ",
        "ports": "LNZ",
        "country": "AT"
      },
      {
        "value": "Salzburg",
        "label": "Salzburg",
        "name": "SZG",
        "ports": "SZG",
        "country": "AT"
      },
      {
        "value": "Vienna",
        "label": "Vienna",
        "name": "VIE",
        "ports": "VIE",
        "country": "AT"
      },
      {
        "value": "Klagenfurt",
        "label": "Klagenfurt",
        "name": "KLU",
        "ports": "KLU",
        "country": "AT"
      }
    ]
  },
  {
    "label": "Bosnia and Herzegovina",
    "options": [
      {
        "value": "Bosnia and Herzegovina",
        "label": "Bosnia and Herzegovina (all airports)",
        "name": "BA",
        "ports": "OMO_SJJ_BNX_TZL",
        "country": "BA"
      },
      {
        "value": "Mostar",
        "label": "Mostar",
        "name": "OMO",
        "ports": "OMO",
        "country": "BA"
      },
      {
        "value": "Sarajevo",
        "label": "Sarajevo",
        "name": "SJJ",
        "ports": "SJJ",
        "country": "BA"
      },
      {
        "value": "Banja Luka",
        "label": "Banja Luka",
        "name": "BNX",
        "ports": "BNX",
        "country": "BA"
      },
      {
        "value": "Tuzla",
        "label": "Tuzla",
        "name": "TZL",
        "ports": "TZL",
        "country": "BA"
      }
    ]
  },
  {
    "label": "Belgium",
    "options": [
      {
        "value": "Belgium",
        "label": "Belgium (all airports)",
        "name": "BE",
        "ports": "ANR_BRU_CRL_LGG_OST",
        "country": "BE"
      },
      {
        "value": "Antwerp-Deurne",
        "label": "Antwerp-Deurne",
        "name": "ANR",
        "ports": "ANR",
        "country": "BE"
      },
      {
        "value": "Liege",
        "label": "Liege",
        "name": "LGG",
        "ports": "LGG",
        "country": "BE"
      },
      {
        "value": "Ostend-Bruges",
        "label": "Ostend-Bruges",
        "name": "OST",
        "ports": "OST",
        "country": "BE"
      }
    ]
  },
  {
    "label": "Brussels, Belgium",
    "options": [
      {
        "value": "Brussels",
        "label": "Brussels (all airports)",
        "name": "BRU_ALL",
        "ports": "BRU_CRL",
        "country": "BE"
      },
      {
        "value": "Brussels",
        "label": "Brussels",
        "name": "BRU",
        "ports": "BRU",
        "country": "BE"
      },
      {
        "value": "Brussels (Charleroi)",
        "label": "Brussels (Charleroi)",
        "name": "CRL",
        "ports": "CRL",
        "country": "BE"
      }
    ]
  },
  {
    "label": "Bulgaria",
    "options": [
      {
        "value": "Bulgaria",
        "label": "Bulgaria (all airports)",
        "name": "BG",
        "ports": "BOJ_PDV_SOF_VAR",
        "country": "BG"
      },
      {
        "value": "Bourgas",
        "label": "Bourgas",
        "name": "BOJ",
        "ports": "BOJ",
        "country": "BG"
      },
      {
        "value": "Plovdiv",
        "label": "Plovdiv",
        "name": "PDV",
        "ports": "PDV",
        "country": "BG"
      },
      {
        "value": "Sofia",
        "label": "Sofia",
        "name": "SOF",
        "ports": "SOF",
        "country": "BG"
      },
      {
        "value": "Varna",
        "label": "Varna",
        "name": "VAR",
        "ports": "VAR",
        "country": "BG"
      }
    ]
  },
  {
    "label": "Belarus",
    "options": [
      {
        "value": "Belarus",
        "label": "Belarus (all airports)",
        "name": "BY",
        "ports": "MSQ",
        "country": "BY"
      },
      {
        "value": "Minsk",
        "label": "Minsk",
        "name": "MSQ",
        "ports": "MSQ",
        "country": "BY"
      }
    ]
  },
  {
    "label": "Switzerland",
    "options": [
      {
        "value": "Switzerland",
        "label": "Switzerland (all airports)",
        "name": "CH",
        "ports": "GVA_ZRH_BSL",
        "country": "CH"
      },
      {
        "value": "Geneva",
        "label": "Geneva",
        "name": "GVA",
        "ports": "GVA",
        "country": "CH"
      },
      {
        "value": "Zurich",
        "label": "Zurich",
        "name": "ZRH",
        "ports": "ZRH",
        "country": "CH"
      },
      {
        "value": "Basel-Mulhouse-Freiburg (BSL)",
        "label": "Basel-Mulhouse-Freiburg (BSL)",
        "name": "BSL",
        "ports": "BSL",
        "country": "CH"
      }
    ]
  },
  {
    "label": "Cyprus",
    "options": [
      {
        "value": "Cyprus",
        "label": "Cyprus (all airports)",
        "name": "CY",
        "ports": "LCA_PFO_ECN",
        "country": "CY"
      },
      {
        "value": "Larnaca",
        "label": "Larnaca",
        "name": "LCA",
        "ports": "LCA",
        "country": "CY"
      },
      {
        "value": "Paphos",
        "label": "Paphos",
        "name": "PFO",
        "ports": "PFO",
        "country": "CY"
      },
      {
        "value": "Ercan (Nicosia)",
        "label": "Ercan (Nicosia)",
        "name": "ECN",
        "ports": "ECN",
        "country": "CY"
      }
    ]
  },
  {
    "label": "Czechia",
    "options": [
      {
        "value": "Czechia",
        "label": "Czechia (all airports)",
        "name": "CZ",
        "ports": "KLV_OSR_PED_PRG_BRQ",
        "country": "CZ"
      },
      {
        "value": "Karlovy Vary",
        "label": "Karlovy Vary",
        "name": "KLV",
        "ports": "KLV",
        "country": "CZ"
      },
      {
        "value": "Ostrava",
        "label": "Ostrava",
        "name": "OSR",
        "ports": "OSR",
        "country": "CZ"
      },
      {
        "value": "Pardubice",
        "label": "Pardubice",
        "name": "PED",
        "ports": "PED",
        "country": "CZ"
      },
      {
        "value": "Prague",
        "label": "Prague",
        "name": "PRG",
        "ports": "PRG",
        "country": "CZ"
      },
      {
        "value": "Brno",
        "label": "Brno",
        "name": "BRQ",
        "ports": "BRQ",
        "country": "CZ"
      }
    ]
  },
  {
    "label": "Germany",
    "options": [
      {
        "label": "Germany (all airports)",
        "value": "Germany",
        "ports": "SXF_DRS_ERF_FRA_FMO_HAM_CGN_DUS_MUC_NUE_LEJ_SCN_STR_TXL_HAJ_BRE_HHN_PAD_DTM_FDH_GWT_FMM_FKB_NRN_HDF",
        "country": "DE",
        "name": "DE"
      },
      {
        "value": "Dresden",
        "label": "Dresden",
        "name": "DRS",
        "ports": "DRS",
        "country": "DE"
      },
      {
        "value": "Erfurt",
        "label": "Erfurt",
        "name": "ERF",
        "ports": "ERF",
        "country": "DE"
      },
      {
        "value": "Muenster-Osnabrueck",
        "label": "Muenster-Osnabrueck",
        "name": "FMO",
        "ports": "FMO",
        "country": "DE"
      },
      {
        "value": "Hamburg",
        "label": "Hamburg",
        "name": "HAM",
        "ports": "HAM",
        "country": "DE"
      },
      {
        "value": "Cologne-Bonn",
        "label": "Cologne-Bonn",
        "name": "CGN",
        "ports": "CGN",
        "country": "DE"
      },
      {
        "value": "Munich",
        "label": "Munich",
        "name": "MUC",
        "ports": "MUC",
        "country": "DE"
      },
      {
        "value": "Nuernberg",
        "label": "Nuernberg",
        "name": "NUE",
        "ports": "NUE",
        "country": "DE"
      },
      {
        "value": "Leipzig-Halle",
        "label": "Leipzig-Halle",
        "name": "LEJ",
        "ports": "LEJ",
        "country": "DE"
      },
      {
        "value": "Saarbruecken",
        "label": "Saarbruecken",
        "name": "SCN",
        "ports": "SCN",
        "country": "DE"
      },
      {
        "value": "Stuttgart",
        "label": "Stuttgart",
        "name": "STR",
        "ports": "STR",
        "country": "DE"
      },
      {
        "value": "Hanover",
        "label": "Hanover",
        "name": "HAJ",
        "ports": "HAJ",
        "country": "DE"
      },
      {
        "value": "Bremen",
        "label": "Bremen",
        "name": "BRE",
        "ports": "BRE",
        "country": "DE"
      },
      {
        "value": "Paderborn",
        "label": "Paderborn",
        "name": "PAD",
        "ports": "PAD",
        "country": "DE"
      },
      {
        "value": "Dortmund",
        "label": "Dortmund",
        "name": "DTM",
        "ports": "DTM",
        "country": "DE"
      },
      {
        "value": "Friedrichshafen",
        "label": "Friedrichshafen",
        "name": "FDH",
        "ports": "FDH",
        "country": "DE"
      },
      {
        "value": "Westerland-Sylt",
        "label": "Westerland-Sylt",
        "name": "GWT",
        "ports": "GWT",
        "country": "DE"
      },
      {
        "value": "Memmingen",
        "label": "Memmingen",
        "name": "FMM",
        "ports": "FMM",
        "country": "DE"
      },
      {
        "value": "Karlsruhe-Baden Baden",
        "label": "Karlsruhe-Baden Baden",
        "name": "FKB",
        "ports": "FKB",
        "country": "DE"
      },
      {
        "value": "Heringsdorf",
        "label": "Heringsdorf",
        "name": "HDF",
        "ports": "HDF",
        "country": "DE"
      }
    ]
  },
  {
    "label": "Duesseldorf, Germany",
    "options": [
      {
        "value": "Duesseldorf",
        "label": "Duesseldorf (all airports)",
        "name": "DUS_ALL",
        "ports": "DUS_NRN",
        "country": "DE"
      },
      {
        "value": "Duesseldorf",
        "label": "Duesseldorf",
        "name": "DUS",
        "ports": "DUS",
        "country": "DE"
      },
      {
        "value": "Dusseldorf (Weeze)",
        "label": "Dusseldorf (Weeze)",
        "name": "NRN",
        "ports": "NRN",
        "country": "DE"
      }
    ]
  },
  {
    "label": "Berlin, Germany",
    "options": [
      {
        "value": "Berlin",
        "label": "Berlin (all airports)",
        "name": "BER_ALL",
        "ports": "SXF_TXL",
        "country": "DE"
      },
      {
        "value": "Berlin (Schonefeld)",
        "label": "Berlin (Schonefeld)",
        "name": "SXF",
        "ports": "SXF",
        "country": "DE"
      },
      {
        "value": "Berlin (Tegel)",
        "label": "Berlin (Tegel)",
        "name": "TXL",
        "ports": "TXL",
        "country": "DE"
      }
    ]
  },
  {
    "label": "Frankfurt, Germany",
    "options": [
      {
        "value": "Frankfurt",
        "label": "Frankfurt (all airports)",
        "name": "FRA_ALL",
        "ports": "FRA_HHN",
        "country": "DE"
      },
      {
        "value": "Frankfurt",
        "label": "Frankfurt",
        "name": "FRA",
        "ports": "FRA",
        "country": "DE"
      },
      {
        "value": "Frankfurt (Hahn)",
        "label": "Frankfurt (Hahn)",
        "name": "HHN",
        "ports": "HHN",
        "country": "DE"
      }
    ]
  },
  {
    "label": "Denmark",
    "options": [
      {
        "label": "Denmark (all airports)",
        "value": "Denmark",
        "ports": "AAR_BLL_CPH_AAL",
        "country": "DK",
        "name": "DK"
      },
      {
        "value": "Aarhus",
        "label": "Aarhus",
        "name": "AAR",
        "ports": "AAR",
        "country": "DK"
      },
      {
        "value": "Billund",
        "label": "Billund",
        "name": "BLL",
        "ports": "BLL",
        "country": "DK"
      },
      {
        "value": "Copenhagen",
        "label": "Copenhagen",
        "name": "CPH",
        "ports": "CPH",
        "country": "DK"
      },
      {
        "value": "Aalborg",
        "label": "Aalborg",
        "name": "AAL",
        "ports": "AAL",
        "country": "DK"
      }
    ]
  },
  {
    "label": "Estonia",
    "options": [
      {
        "label": "Estonia (all airports)",
        "value": "Estonia",
        "ports": "TLL",
        "country": "EE",
        "name": "EE"
      },
      {
        "value": "Tallinn",
        "label": "Tallinn",
        "name": "TLL",
        "ports": "TLL",
        "country": "EE"
      }
    ]
  },
  {
    "label": "Spain",
    "options": [
      {
        "label": "Spain (all airports)",
        "value": "Spain",
        "ports": "FUE_VDE_SPC_LPA_ACE_TFS_TFN_ALC_LEI_OVD_BIO_BCN_LCG_GRO_GRX_IBZ_XRY_MJV_MAD_AGP_MAH_REU_EAS_SCQ_VLC_VLL_VIT_VGO_SDR_ZAZ_SVQ_PMI_GMZ_CDT",
        "country": "ES",
        "name": "ES"
      },
      {
        "value": "Fuerteventura",
        "label": "Fuerteventura",
        "name": "FUE",
        "ports": "FUE",
        "country": "ES"
      },
      {
        "value": "El Hierro",
        "label": "El Hierro",
        "name": "VDE",
        "ports": "VDE",
        "country": "ES"
      },
      {
        "value": "La Palma",
        "label": "La Palma",
        "name": "SPC",
        "ports": "SPC",
        "country": "ES"
      },
      {
        "value": "Gran Canaria",
        "label": "Gran Canaria",
        "name": "LPA",
        "ports": "LPA",
        "country": "ES"
      },
      {
        "value": "Lanzarote",
        "label": "Lanzarote",
        "name": "ACE",
        "ports": "ACE",
        "country": "ES"
      },
      {
        "value": "Tenerife South",
        "label": "Tenerife South",
        "name": "TFS",
        "ports": "TFS",
        "country": "ES"
      },
      {
        "value": "Tenerife North",
        "label": "Tenerife North",
        "name": "TFN",
        "ports": "TFN",
        "country": "ES"
      },
      {
        "value": "Alicante",
        "label": "Alicante",
        "name": "ALC",
        "ports": "ALC",
        "country": "ES"
      },
      {
        "value": "Almeria",
        "label": "Almeria",
        "name": "LEI",
        "ports": "LEI",
        "country": "ES"
      },
      {
        "value": "Asturias",
        "label": "Asturias",
        "name": "OVD",
        "ports": "OVD",
        "country": "ES"
      },
      {
        "value": "Bilbao",
        "label": "Bilbao",
        "name": "BIO",
        "ports": "BIO",
        "country": "ES"
      },
      {
        "value": "La Coruna",
        "label": "La Coruna",
        "name": "LCG",
        "ports": "LCG",
        "country": "ES"
      },
      {
        "value": "Granada",
        "label": "Granada",
        "name": "GRX",
        "ports": "GRX",
        "country": "ES"
      },
      {
        "value": "Ibiza",
        "label": "Ibiza",
        "name": "IBZ",
        "ports": "IBZ",
        "country": "ES"
      },
      {
        "value": "Jerez De La Frontera",
        "label": "Jerez De La Frontera",
        "name": "XRY",
        "ports": "XRY",
        "country": "ES"
      },
      {
        "value": "Murcia",
        "label": "Murcia",
        "name": "MJV",
        "ports": "MJV",
        "country": "ES"
      },
      {
        "value": "Madrid",
        "label": "Madrid",
        "name": "MAD",
        "ports": "MAD",
        "country": "ES"
      },
      {
        "value": "Malaga",
        "label": "Malaga",
        "name": "AGP",
        "ports": "AGP",
        "country": "ES"
      },
      {
        "value": "Menorca",
        "label": "Menorca",
        "name": "MAH",
        "ports": "MAH",
        "country": "ES"
      },
      {
        "value": "San Sebastian",
        "label": "San Sebastian",
        "name": "EAS",
        "ports": "EAS",
        "country": "ES"
      },
      {
        "value": "Santiago De Compostela",
        "label": "Santiago De Compostela",
        "name": "SCQ",
        "ports": "SCQ",
        "country": "ES"
      },
      {
        "value": "Valencia",
        "label": "Valencia",
        "name": "VLC",
        "ports": "VLC",
        "country": "ES"
      },
      {
        "value": "Valladolid",
        "label": "Valladolid",
        "name": "VLL",
        "ports": "VLL",
        "country": "ES"
      },
      {
        "value": "Vitoria-Gasteiz",
        "label": "Vitoria-Gasteiz",
        "name": "VIT",
        "ports": "VIT",
        "country": "ES"
      },
      {
        "value": "Vigo",
        "label": "Vigo",
        "name": "VGO",
        "ports": "VGO",
        "country": "ES"
      },
      {
        "value": "Santander",
        "label": "Santander",
        "name": "SDR",
        "ports": "SDR",
        "country": "ES"
      },
      {
        "value": "Zaragoza",
        "label": "Zaragoza",
        "name": "ZAZ",
        "ports": "ZAZ",
        "country": "ES"
      },
      {
        "value": "Sevilla",
        "label": "Sevilla",
        "name": "SVQ",
        "ports": "SVQ",
        "country": "ES"
      },
      {
        "value": "Palma Mallorca",
        "label": "Palma Mallorca",
        "name": "PMI",
        "ports": "PMI",
        "country": "ES"
      },
      {
        "value": "Gomera",
        "label": "Gomera",
        "name": "GMZ",
        "ports": "GMZ",
        "country": "ES"
      },
      {
        "value": "Castellon",
        "label": "Castellon",
        "name": "CDT",
        "ports": "CDT",
        "country": "ES"
      }
    ]
  },
  {
    "label": "Barcelona, Spain",
    "options": [
      {
        "value": "Barcelona",
        "label": "Barcelona (all airports)",
        "name": "BAR_ALL",
        "ports": "BCN_GRO_REU",
        "country": "ES"
      },
      {
        "value": "Barcelona",
        "label": "Barcelona",
        "name": "BCN",
        "ports": "BCN",
        "country": "ES"
      },
      {
        "value": "Barcelona (Girona)",
        "label": "Barcelona (Girona)",
        "name": "GRO",
        "ports": "GRO",
        "country": "ES"
      },
      {
        "value": "Barcelona (Reus)",
        "label": "Barcelona (Reus)",
        "name": "REU",
        "ports": "REU",
        "country": "ES"
      }
    ]
  },
  {
    "label": "Finland",
    "options": [
      {
        "label": "Finland (all airports)",
        "value": "Finland",
        "ports": "HEL_IVL_KTT_LPP_OUL_RVN_TMP_TKU_VAA",
        "country": "FI",
        "name": "FI"
      },
      {
        "value": "Helsinki",
        "label": "Helsinki",
        "name": "HEL",
        "ports": "HEL",
        "country": "FI"
      },
      {
        "value": "Ivalo",
        "label": "Ivalo",
        "name": "IVL",
        "ports": "IVL",
        "country": "FI"
      },
      {
        "value": "Kittila",
        "label": "Kittila",
        "name": "KTT",
        "ports": "KTT",
        "country": "FI"
      },
      {
        "value": "Lappeenranta",
        "label": "Lappeenranta",
        "name": "LPP",
        "ports": "LPP",
        "country": "FI"
      },
      {
        "value": "Oulu",
        "label": "Oulu",
        "name": "OUL",
        "ports": "OUL",
        "country": "FI"
      },
      {
        "value": "Rovaniemi",
        "label": "Rovaniemi",
        "name": "RVN",
        "ports": "RVN",
        "country": "FI"
      },
      {
        "value": "Tampere",
        "label": "Tampere",
        "name": "TMP",
        "ports": "TMP",
        "country": "FI"
      },
      {
        "value": "Turku",
        "label": "Turku",
        "name": "TKU",
        "ports": "TKU",
        "country": "FI"
      },
      {
        "value": "Vaasa",
        "label": "Vaasa",
        "name": "VAA",
        "ports": "VAA",
        "country": "FI"
      }
    ]
  },
  {
    "label": "Faeroe Islands",
    "options": [
      {
        "label": "Faeroe Islands (all airports)",
        "value": "Faeroe Islands"
      },
      {
        "value": "Vagar",
        "label": "Vagar",
        "name": "FAE",
        "ports": "FAE",
        "country": "FO"
      }
    ]
  },
  {
    "label": "France",
    "options": [
      {
        "label": "France (all airports)",
        "value": "France",
        "ports": "BOD_EGC_PIS_LIG_TLS_PUF_LDE_BVE_BIQ_RDZ_DLE_ETZ_BIA_CLY_FSC_AJA_CMF_CFE_LYS_GNB_CCF_MRS_NCE_PGF_MPL_BZR_AVN_BVA_XCR_TUF_CDG_ORY_LIL_BES_DNR_DOL_LRT_CFR_RNS_NTE_MLH_SXB_TLN_FNI_LRH",
        "country": "FR",
        "name": "FR"
      },
      {
        "value": "Bordeaux",
        "label": "Bordeaux",
        "name": "BOD",
        "ports": "BOD",
        "country": "FR"
      },
      {
        "value": "Bergerac",
        "label": "Bergerac",
        "name": "EGC",
        "ports": "EGC",
        "country": "FR"
      },
      {
        "value": "Poitiers",
        "label": "Poitiers",
        "name": "PIS",
        "ports": "PIS",
        "country": "FR"
      },
      {
        "value": "Limoges",
        "label": "Limoges",
        "name": "LIG",
        "ports": "LIG",
        "country": "FR"
      },
      {
        "value": "Toulouse",
        "label": "Toulouse",
        "name": "TLS",
        "ports": "TLS",
        "country": "FR"
      },
      {
        "value": "Pau",
        "label": "Pau",
        "name": "PUF",
        "ports": "PUF",
        "country": "FR"
      },
      {
        "value": "Lourdes-Tarbes",
        "label": "Lourdes-Tarbes",
        "name": "LDE",
        "ports": "LDE",
        "country": "FR"
      },
      {
        "value": "Brive",
        "label": "Brive",
        "name": "BVE",
        "ports": "BVE",
        "country": "FR"
      },
      {
        "value": "Biarritz",
        "label": "Biarritz",
        "name": "BIQ",
        "ports": "BIQ",
        "country": "FR"
      },
      {
        "value": "Rodez",
        "label": "Rodez",
        "name": "RDZ",
        "ports": "RDZ",
        "country": "FR"
      },
      {
        "value": "Dole-Jura",
        "label": "Dole-Jura",
        "name": "DLE",
        "ports": "DLE",
        "country": "FR"
      },
      {
        "value": "Metz-Nancy",
        "label": "Metz-Nancy",
        "name": "ETZ",
        "ports": "ETZ",
        "country": "FR"
      },
      {
        "value": "Bastia",
        "label": "Bastia",
        "name": "BIA",
        "ports": "BIA",
        "country": "FR"
      },
      {
        "value": "Calvi",
        "label": "Calvi",
        "name": "CLY",
        "ports": "CLY",
        "country": "FR"
      },
      {
        "value": "Figari",
        "label": "Figari",
        "name": "FSC",
        "ports": "FSC",
        "country": "FR"
      },
      {
        "value": "Ajaccio",
        "label": "Ajaccio",
        "name": "AJA",
        "ports": "AJA",
        "country": "FR"
      },
      {
        "value": "Chambery",
        "label": "Chambery",
        "name": "CMF",
        "ports": "CMF",
        "country": "FR"
      },
      {
        "value": "Clermont-Ferrand",
        "label": "Clermont-Ferrand",
        "name": "CFE",
        "ports": "CFE",
        "country": "FR"
      },
      {
        "value": "Lyon",
        "label": "Lyon",
        "name": "LYS",
        "ports": "LYS",
        "country": "FR"
      },
      {
        "value": "Grenoble",
        "label": "Grenoble",
        "name": "GNB",
        "ports": "GNB",
        "country": "FR"
      },
      {
        "value": "Carcassonne",
        "label": "Carcassonne",
        "name": "CCF",
        "ports": "CCF",
        "country": "FR"
      },
      {
        "value": "Marseille",
        "label": "Marseille",
        "name": "MRS",
        "ports": "MRS",
        "country": "FR"
      },
      {
        "value": "Nice",
        "label": "Nice",
        "name": "NCE",
        "ports": "NCE",
        "country": "FR"
      },
      {
        "value": "Perpignan",
        "label": "Perpignan",
        "name": "PGF",
        "ports": "PGF",
        "country": "FR"
      },
      {
        "value": "Montpellier",
        "label": "Montpellier",
        "name": "MPL",
        "ports": "MPL",
        "country": "FR"
      },
      {
        "value": "Beziers",
        "label": "Beziers",
        "name": "BZR",
        "ports": "BZR",
        "country": "FR"
      },
      {
        "value": "Avignon-Caumont",
        "label": "Avignon-Caumont",
        "name": "AVN",
        "ports": "AVN",
        "country": "FR"
      },
      {
        "value": "Tours",
        "label": "Tours",
        "name": "TUF",
        "ports": "TUF",
        "country": "FR"
      },
      {
        "value": "Lille",
        "label": "Lille",
        "name": "LIL",
        "ports": "LIL",
        "country": "FR"
      },
      {
        "value": "Brest",
        "label": "Brest",
        "name": "BES",
        "ports": "BES",
        "country": "FR"
      },
      {
        "value": "Dinard",
        "label": "Dinard",
        "name": "DNR",
        "ports": "DNR",
        "country": "FR"
      },
      {
        "value": "Deauville",
        "label": "Deauville",
        "name": "DOL",
        "ports": "DOL",
        "country": "FR"
      },
      {
        "value": "Lorient",
        "label": "Lorient",
        "name": "LRT",
        "ports": "LRT",
        "country": "FR"
      },
      {
        "value": "Caen",
        "label": "Caen",
        "name": "CFR",
        "ports": "CFR",
        "country": "FR"
      },
      {
        "value": "Rennes",
        "label": "Rennes",
        "name": "RNS",
        "ports": "RNS",
        "country": "FR"
      },
      {
        "value": "Nantes",
        "label": "Nantes",
        "name": "NTE",
        "ports": "NTE",
        "country": "FR"
      },
      {
        "value": "Basel-Mulhouse-Freiburg (MLH)",
        "label": "Basel-Mulhouse-Freiburg (MLH)",
        "name": "MLH",
        "ports": "MLH",
        "country": "FR"
      },
      {
        "value": "Strasbourg",
        "label": "Strasbourg",
        "name": "SXB",
        "ports": "SXB",
        "country": "FR"
      },
      {
        "value": "Toulon-Hyeres",
        "label": "Toulon-Hyeres",
        "name": "TLN",
        "ports": "TLN",
        "country": "FR"
      },
      {
        "value": "Nimes",
        "label": "Nimes",
        "name": "FNI",
        "ports": "FNI",
        "country": "FR"
      },
      {
        "value": "La Rochelle",
        "label": "La Rochelle",
        "name": "LRH",
        "ports": "LRH",
        "country": "FR"
      }
    ]
  },
  {
    "label": "Paris, France",
    "options": [
      {
        "value": "Paris",
        "label": "Paris (all airports)",
        "name": "PAR_ALL",
        "ports": "CDG_ORY_BVA_XCR_LBG",
        "country": "FR"
      },
      {
        "value": "Paris (Beauvais)",
        "label": "Paris (Beauvais)",
        "name": "BVA",
        "ports": "BVA",
        "country": "FR"
      },
      {
        "value": "Paris (Charles de Gaulle)",
        "label": "Paris (Charles de Gaulle)",
        "name": "CDG",
        "ports": "CDG",
        "country": "FR"
      },
      {
        "value": "Paris (Orly)",
        "label": "Paris (Orly)",
        "name": "ORY",
        "ports": "ORY",
        "country": "FR"
      },
      {
        "value": "Chalons-Vatry",
        "label": "Chalons-Vatry",
        "name": "XCR",
        "ports": "XCR",
        "country": "FR"
      }
    ]
  },
  {
    "label": "United Kingdom",
    "options": [
      {
        "label": "United Kingdom (all airports)",
        "value": "United Kingdom",
        "ports": "BFS_BHD_LDY_BHX_MAN_NQY_CWL_BRS_LPL_LTN_BOH_SOU_LGW_LCY_LHR_SEN_HUY_LBA_NCL_MME_EMA_WIC_ABZ_INV_GLA_EDI_PIK_SYY_NWI_STN_EXT_DSA_VLY",
        "country": "GB",
        "name": "GB"
      },
      {
        "value": "Derry",
        "label": "Derry",
        "name": "LDY",
        "ports": "LDY",
        "country": "GB"
      },
      {
        "value": "Birmingham",
        "label": "Birmingham",
        "name": "BHX",
        "ports": "BHX",
        "country": "GB"
      },
      {
        "value": "Manchester",
        "label": "Manchester",
        "name": "MAN",
        "ports": "MAN",
        "country": "GB"
      },
      {
        "value": "Newquay",
        "label": "Newquay",
        "name": "NQY",
        "ports": "NQY",
        "country": "GB"
      },
      {
        "value": "Cardiff",
        "label": "Cardiff",
        "name": "CWL",
        "ports": "CWL",
        "country": "GB"
      },
      {
        "value": "Bristol",
        "label": "Bristol",
        "name": "BRS",
        "ports": "BRS",
        "country": "GB"
      },
      {
        "value": "Liverpool",
        "label": "Liverpool",
        "name": "LPL",
        "ports": "LPL",
        "country": "GB"
      },
      {
        "value": "Bournemouth",
        "label": "Bournemouth",
        "name": "BOH",
        "ports": "BOH",
        "country": "GB"
      },
      {
        "value": "Southampton",
        "label": "Southampton",
        "name": "SOU",
        "ports": "SOU",
        "country": "GB"
      },
      {
        "value": "Humberside",
        "label": "Humberside",
        "name": "HUY",
        "ports": "HUY",
        "country": "GB"
      },
      {
        "value": "Leeds",
        "label": "Leeds",
        "name": "LBA",
        "ports": "LBA",
        "country": "GB"
      },
      {
        "value": "Newcastle",
        "label": "Newcastle",
        "name": "NCL",
        "ports": "NCL",
        "country": "GB"
      },
      {
        "value": "Durham-Tees",
        "label": "Durham-Tees",
        "name": "MME",
        "ports": "MME",
        "country": "GB"
      },
      {
        "value": "East Midlands",
        "label": "East Midlands",
        "name": "EMA",
        "ports": "EMA",
        "country": "GB"
      },
      {
        "value": "Wick",
        "label": "Wick",
        "name": "WIC",
        "ports": "WIC",
        "country": "GB"
      },
      {
        "value": "Aberdeen",
        "label": "Aberdeen",
        "name": "ABZ",
        "ports": "ABZ",
        "country": "GB"
      },
      {
        "value": "Inverness",
        "label": "Inverness",
        "name": "INV",
        "ports": "INV",
        "country": "GB"
      },
      {
        "value": "Edinburgh",
        "label": "Edinburgh",
        "name": "EDI",
        "ports": "EDI",
        "country": "GB"
      },
      {
        "value": "Stornoway",
        "label": "Stornoway",
        "name": "SYY",
        "ports": "SYY",
        "country": "GB"
      },
      {
        "value": "Norwich",
        "label": "Norwich",
        "name": "NWI",
        "ports": "NWI",
        "country": "GB"
      },
      {
        "value": "Exeter",
        "label": "Exeter",
        "name": "EXT",
        "ports": "EXT",
        "country": "GB"
      },
      {
        "value": "Doncaster-Sheffield",
        "label": "Doncaster-Sheffield",
        "name": "DSA",
        "ports": "DSA",
        "country": "GB"
      },
      {
        "value": "Angelsey",
        "label": "Angelsey",
        "name": "VLY",
        "ports": "VLY",
        "country": "GB"
      }
    ]
  },
  {
    "label": "Belfast, United Kingdom",
    "options": [
      {
        "value": "Belfast",
        "label": "Belfast (all airports)",
        "name": "BEL_ALL",
        "ports": "BFS_BHD",
        "country": "GB"
      },
      {
        "value": "Belfast",
        "label": "Belfast",
        "name": "BFS",
        "ports": "BFS",
        "country": "GB"
      },
      {
        "value": "Belfast (city)",
        "label": "Belfast (city)",
        "name": "BHD",
        "ports": "BHD",
        "country": "GB"
      }
    ]
  },
  {
    "label": "Glasgow, United Kingdom",
    "options": [
      {
        "value": "Glasgow",
        "label": "Glasgow (all airports)",
        "name": "GLA_ALL",
        "ports": "PIK_GLA",
        "country": "GB"
      },
      {
        "value": "Glasgow",
        "label": "Glasgow",
        "name": "GLA",
        "ports": "GLA",
        "country": "GB"
      },
      {
        "value": "Glasgow (Prestwick)",
        "label": "Glasgow (Prestwick)",
        "name": "PIK",
        "ports": "PIK",
        "country": "GB"
      }
    ]
  },
  {
    "label": "London, United Kingdom",
    "options": [
      {
        "value": "London",
        "label": "London (all airports)",
        "name": "LON_ALL",
        "ports": "LGW_STN_LTN_LCY_LHR_SEN_BQH",
        "country": "GB"
      },
      {
        "value": "London (Stansted)",
        "label": "London (Stansted)",
        "name": "STN",
        "ports": "STN",
        "country": "GB"
      },
      {
        "value": "London (Luton)",
        "label": "London (Luton)",
        "name": "LTN",
        "ports": "LTN",
        "country": "GB"
      },
      {
        "value": "London (Gatwick)",
        "label": "London (Gatwick)",
        "name": "LGW",
        "ports": "LGW",
        "country": "GB"
      },
      {
        "value": "London (City)",
        "label": "London (City)",
        "name": "LCY",
        "ports": "LCY",
        "country": "GB"
      },
      {
        "value": "London (Heathrow)",
        "label": "London (Heathrow)",
        "name": "LHR",
        "ports": "LHR",
        "country": "GB"
      },
      {
        "value": "London (Southend)",
        "label": "London (Southend)",
        "name": "SEN",
        "ports": "SEN",
        "country": "GB"
      }
    ]
  },
  {
    "label": "Georgia",
    "options": [
      {
        "label": "Georgia (all airports)",
        "value": "Georgia",
        "ports": "BUS_KUT_TBS",
        "country": "GE",
        "name": "GE"
      },
      {
        "value": "Batumi",
        "label": "Batumi",
        "name": "BUS",
        "ports": "BUS",
        "country": "GE"
      },
      {
        "value": "Kutaisi",
        "label": "Kutaisi",
        "name": "KUT",
        "ports": "KUT",
        "country": "GE"
      },
      {
        "value": "Tbilisi",
        "label": "Tbilisi",
        "name": "TBS",
        "ports": "TBS",
        "country": "GE"
      }
    ]
  },
  {
    "label": "Gibraltar",
    "options": [
      {
        "label": "Gibraltar (all airports)",
        "value": "Gibraltar",
        "ports": "GIB",
        "country": "GI",
        "name": "GI"
      },
      {
        "value": "Gibraltar",
        "label": "Gibraltar",
        "name": "GIB",
        "ports": "GIB",
        "country": "GI"
      }
    ]
  },
  {
    "label": "Greece",
    "options": [
      {
        "label": "Greece (all airports)",
        "value": "Greece",
        "ports": "VOL_HER_EFL_KLX_KGS_AOK_CFU_KVA_JMK_MJT_PVK_RHO_GPA_CHQ_JSI_SMI_JTR_JSH_SKG_ZTH_ATH",
        "country": "GR",
        "name": "GR"
      },
      {
        "value": "Volos",
        "label": "Volos",
        "name": "VOL",
        "ports": "VOL",
        "country": "GR"
      },
      {
        "value": "Heraklion",
        "label": "Heraklion",
        "name": "HER",
        "ports": "HER",
        "country": "GR"
      },
      {
        "value": "Kefalonia",
        "label": "Kefalonia",
        "name": "EFL",
        "ports": "EFL",
        "country": "GR"
      },
      {
        "value": "Kalamata",
        "label": "Kalamata",
        "name": "KLX",
        "ports": "KLX",
        "country": "GR"
      },
      {
        "value": "Kos",
        "label": "Kos",
        "name": "KGS",
        "ports": "KGS",
        "country": "GR"
      },
      {
        "value": "Karpathos",
        "label": "Karpathos",
        "name": "AOK",
        "ports": "AOK",
        "country": "GR"
      },
      {
        "value": "Corfu",
        "label": "Corfu",
        "name": "CFU",
        "ports": "CFU",
        "country": "GR"
      },
      {
        "value": "Kavala",
        "label": "Kavala",
        "name": "KVA",
        "ports": "KVA",
        "country": "GR"
      },
      {
        "value": "Mikonos",
        "label": "Mikonos",
        "name": "JMK",
        "ports": "JMK",
        "country": "GR"
      },
      {
        "value": "Lesbos (Mytilene)",
        "label": "Lesbos (Mytilene)",
        "name": "MJT",
        "ports": "MJT",
        "country": "GR"
      },
      {
        "value": "Preveza-Lefkas",
        "label": "Preveza-Lefkas",
        "name": "PVK",
        "ports": "PVK",
        "country": "GR"
      },
      {
        "value": "Rhodes",
        "label": "Rhodes",
        "name": "RHO",
        "ports": "RHO",
        "country": "GR"
      },
      {
        "value": "Patras",
        "label": "Patras",
        "name": "GPA",
        "ports": "GPA",
        "country": "GR"
      },
      {
        "value": "Chania",
        "label": "Chania",
        "name": "CHQ",
        "ports": "CHQ",
        "country": "GR"
      },
      {
        "value": "Skiathos",
        "label": "Skiathos",
        "name": "JSI",
        "ports": "JSI",
        "country": "GR"
      },
      {
        "value": "Samos",
        "label": "Samos",
        "name": "SMI",
        "ports": "SMI",
        "country": "GR"
      },
      {
        "value": "Santorini",
        "label": "Santorini",
        "name": "JTR",
        "ports": "JTR",
        "country": "GR"
      },
      {
        "value": "Sitia",
        "label": "Sitia",
        "name": "JSH",
        "ports": "JSH",
        "country": "GR"
      },
      {
        "value": "Thessaloniki",
        "label": "Thessaloniki",
        "name": "SKG",
        "ports": "SKG",
        "country": "GR"
      },
      {
        "value": "Zakinthos",
        "label": "Zakinthos",
        "name": "ZTH",
        "ports": "ZTH",
        "country": "GR"
      },
      {
        "value": "Athens",
        "label": "Athens",
        "name": "ATH",
        "ports": "ATH",
        "country": "GR"
      }
    ]
  },
  {
    "label": "Croatia",
    "options": [
      {
        "label": "Croatia (all airports)",
        "value": "Croatia",
        "ports": "DBV_OSI_PUY_RJK_SPU_ZAG_ZAD_BWK",
        "country": "HR",
        "name": "HR"
      },
      {
        "value": "Dubrovnik",
        "label": "Dubrovnik",
        "name": "DBV",
        "ports": "DBV",
        "country": "HR"
      },
      {
        "value": "Osijek",
        "label": "Osijek",
        "name": "OSI",
        "ports": "OSI",
        "country": "HR"
      },
      {
        "value": "Pula",
        "label": "Pula",
        "name": "PUY",
        "ports": "PUY",
        "country": "HR"
      },
      {
        "value": "Rijeka",
        "label": "Rijeka",
        "name": "RJK",
        "ports": "RJK",
        "country": "HR"
      },
      {
        "value": "Split",
        "label": "Split",
        "name": "SPU",
        "ports": "SPU",
        "country": "HR"
      },
      {
        "value": "Zagreb",
        "label": "Zagreb",
        "name": "ZAG",
        "ports": "ZAG",
        "country": "HR"
      },
      {
        "value": "Zadar",
        "label": "Zadar",
        "name": "ZAD",
        "ports": "ZAD",
        "country": "HR"
      },
      {
        "value": "Brac",
        "label": "Brac",
        "name": "BWK",
        "ports": "BWK",
        "country": "HR"
      }
    ]
  },
  {
    "label": "Hungary",
    "options": [
      {
        "label": "Hungary (all airports)",
        "value": "Hungary",
        "ports": "BUD_DEB",
        "country": "HU",
        "name": "HU"
      },
      {
        "value": "Budapest",
        "label": "Budapest",
        "name": "BUD",
        "ports": "BUD",
        "country": "HU"
      },
      {
        "value": "Debrecen",
        "label": "Debrecen",
        "name": "DEB",
        "ports": "DEB",
        "country": "HU"
      }
    ]
  },
  {
    "label": "Ireland",
    "options": [
      {
        "label": "Ireland (all airports)",
        "value": "Ireland",
        "ports": "ORK_DUB_NOC_KIR_SNN_CFN",
        "country": "IE",
        "name": "IE"
      },
      {
        "value": "Cork",
        "label": "Cork",
        "name": "ORK",
        "ports": "ORK",
        "country": "IE"
      },
      {
        "value": "Dublin",
        "label": "Dublin",
        "name": "DUB",
        "ports": "DUB",
        "country": "IE"
      },
      {
        "value": "Knock",
        "label": "Knock",
        "name": "NOC",
        "ports": "NOC",
        "country": "IE"
      },
      {
        "value": "Farranfore",
        "label": "Farranfore",
        "name": "KIR",
        "ports": "KIR",
        "country": "IE"
      },
      {
        "value": "Shannon",
        "label": "Shannon",
        "name": "SNN",
        "ports": "SNN",
        "country": "IE"
      },
      {
        "value": "Donegal",
        "label": "Donegal",
        "name": "CFN",
        "ports": "CFN",
        "country": "IE"
      }
    ]
  },
  {
    "label": "Iceland",
    "options": [
      {
        "label": "Iceland (all airports)",
        "value": "Iceland",
        "ports": "AEY_KEF_RKV",
        "country": "IS",
        "name": "IS"
      },
      {
        "value": "Reykjavik",
        "label": "Reykjavik (all airports)",
        "name": "REK_ALL",
        "ports": "RKV_KEF",
        "country": "IS"
      },
      {
        "value": "Akureyri",
        "label": "Akureyri",
        "name": "AEY",
        "ports": "AEY",
        "country": "IS"
      },
      {
        "value": "Reykjavik (Keflavik)",
        "label": "Reykjavik (Keflavik)",
        "name": "KEF",
        "ports": "KEF",
        "country": "IS"
      },
      {
        "value": "Reykjavik (Domestic)",
        "label": "Reykjavik (Domestic)",
        "name": "RKV",
        "ports": "RKV",
        "country": "IS"
      }
    ]
  },
  {
    "label": "Italy",
    "options": [
      {
        "label": "Italy (all airports)",
        "value": "Italy",
        "ports": "CRV_BRI_PSR_BDS_SUF_CTA_LMP_PNL_PMO_REG_TPS_AHO_CAG_OLB_MXP_BGY_TRN_GOA_LIN_PMF_CUF_BLQ_TSF_TRS_RMI_VRN_VCE_CIA_FCO_NAP_PSA_FLR_PEG_AOI_CIY",
        "country": "IT",
        "name": "IT"
      },
      {
        "value": "Crotone",
        "label": "Crotone",
        "name": "CRV",
        "ports": "CRV",
        "country": "IT"
      },
      {
        "value": "Bari",
        "label": "Bari",
        "name": "BRI",
        "ports": "BRI",
        "country": "IT"
      },
      {
        "value": "Pescara",
        "label": "Pescara",
        "name": "PSR",
        "ports": "PSR",
        "country": "IT"
      },
      {
        "value": "Brindisi",
        "label": "Brindisi",
        "name": "BDS",
        "ports": "BDS",
        "country": "IT"
      },
      {
        "value": "Lamezia Terme",
        "label": "Lamezia Terme",
        "name": "SUF",
        "ports": "SUF",
        "country": "IT"
      },
      {
        "value": "Catania",
        "label": "Catania",
        "name": "CTA",
        "ports": "CTA",
        "country": "IT"
      },
      {
        "value": "Lampedusa",
        "label": "Lampedusa",
        "name": "LMP",
        "ports": "LMP",
        "country": "IT"
      },
      {
        "value": "Pantelleria",
        "label": "Pantelleria",
        "name": "PNL",
        "ports": "PNL",
        "country": "IT"
      },
      {
        "value": "Palermo",
        "label": "Palermo",
        "name": "PMO",
        "ports": "PMO",
        "country": "IT"
      },
      {
        "value": "Reggio Calabria",
        "label": "Reggio Calabria",
        "name": "REG",
        "ports": "REG",
        "country": "IT"
      },
      {
        "value": "Trapani",
        "label": "Trapani",
        "name": "TPS",
        "ports": "TPS",
        "country": "IT"
      },
      {
        "value": "Alghero",
        "label": "Alghero",
        "name": "AHO",
        "ports": "AHO",
        "country": "IT"
      },
      {
        "value": "Cagliari",
        "label": "Cagliari",
        "name": "CAG",
        "ports": "CAG",
        "country": "IT"
      },
      {
        "value": "Olbia",
        "label": "Olbia",
        "name": "OLB",
        "ports": "OLB",
        "country": "IT"
      },
      {
        "value": "Turin",
        "label": "Turin",
        "name": "TRN",
        "ports": "TRN",
        "country": "IT"
      },
      {
        "value": "Genova",
        "label": "Genova",
        "name": "GOA",
        "ports": "GOA",
        "country": "IT"
      },
      {
        "value": "Parma",
        "label": "Parma",
        "name": "PMF",
        "ports": "PMF",
        "country": "IT"
      },
      {
        "value": "Cuneo",
        "label": "Cuneo",
        "name": "CUF",
        "ports": "CUF",
        "country": "IT"
      },
      {
        "value": "Bologna",
        "label": "Bologna",
        "name": "BLQ",
        "ports": "BLQ",
        "country": "IT"
      },
      {
        "value": "Trieste",
        "label": "Trieste",
        "name": "TRS",
        "ports": "TRS",
        "country": "IT"
      },
      {
        "value": "Rimini",
        "label": "Rimini",
        "name": "RMI",
        "ports": "RMI",
        "country": "IT"
      },
      {
        "value": "Verona",
        "label": "Verona",
        "name": "VRN",
        "ports": "VRN",
        "country": "IT"
      },
      {
        "value": "Naples",
        "label": "Naples",
        "name": "NAP",
        "ports": "NAP",
        "country": "IT"
      },
      {
        "value": "Pisa",
        "label": "Pisa",
        "name": "PSA",
        "ports": "PSA",
        "country": "IT"
      },
      {
        "value": "Florence",
        "label": "Florence",
        "name": "FLR",
        "ports": "FLR",
        "country": "IT"
      },
      {
        "value": "Perugia",
        "label": "Perugia",
        "name": "PEG",
        "ports": "PEG",
        "country": "IT"
      },
      {
        "value": "Ancona",
        "label": "Ancona",
        "name": "AOI",
        "ports": "AOI",
        "country": "IT"
      },
      {
        "value": "Comiso",
        "label": "Comiso",
        "name": "CIY",
        "ports": "CIY",
        "country": "IT"
      }
    ]
  },
  {
    "label": "Milan, Italy",
    "options": [
      {
        "value": "Milan",
        "label": "Milan (all airports)",
        "name": "MIL_ALL",
        "ports": "MXP_BGY_LIN",
        "country": "IT"
      },
      {
        "value": "Milan (Malpensa)",
        "label": "Milan (Malpensa)",
        "name": "MXP",
        "ports": "MXP",
        "country": "IT"
      },
      {
        "value": "Milan (Bergamo)",
        "label": "Milan (Bergamo)",
        "name": "BGY",
        "ports": "BGY",
        "country": "IT"
      },
      {
        "value": "Milan (Linate)",
        "label": "Milan (Linate)",
        "name": "LIN",
        "ports": "LIN",
        "country": "IT"
      }
    ]
  },
  {
    "label": "Venice, Italy",
    "options": [
      {
        "value": "Venice",
        "label": "Venice (all airports)",
        "name": "VEN_ALL",
        "ports": "VCE_TSF",
        "country": "IT"
      },
      {
        "value": "Venice (Treviso)",
        "label": "Venice (Treviso)",
        "name": "TSF",
        "ports": "TSF",
        "country": "IT"
      },
      {
        "value": "Venice (Marco Polo)",
        "label": "Venice (Marco Polo)",
        "name": "VCE",
        "ports": "VCE",
        "country": "IT"
      }
    ]
  },
  {
    "label": "Rome, Italy",
    "options": [
      {
        "value": "Rome",
        "label": "Rome (all airports)",
        "name": "ROM_ALL",
        "ports": "FCO_CIA",
        "country": "IT"
      },
      {
        "value": "Rome (Ciampino)",
        "label": "Rome (Ciampino)",
        "name": "CIA",
        "ports": "CIA",
        "country": "IT"
      },
      {
        "value": "Rome (Fiumicino)",
        "label": "Rome (Fiumicino)",
        "name": "FCO",
        "ports": "FCO",
        "country": "IT"
      }
    ]
  },
  {
    "label": "Lithuania",
    "options": [
      {
        "label": "Lithuania (all airports)",
        "value": "Lithuania",
        "ports": "KUN_PLQ_VNO",
        "country": "LT",
        "name": "LT"
      },
      {
        "value": "Kaunas",
        "label": "Kaunas",
        "name": "KUN",
        "ports": "KUN",
        "country": "LT"
      },
      {
        "value": "Klaipeda-Palanga",
        "label": "Klaipeda-Palanga",
        "name": "PLQ",
        "ports": "PLQ",
        "country": "LT"
      },
      {
        "value": "Vilnius",
        "label": "Vilnius",
        "name": "VNO",
        "ports": "VNO",
        "country": "LT"
      }
    ]
  },
  {
    "label": "Luxembourg",
    "options": [
      {
        "label": "Luxembourg (all airports)",
        "value": "Luxembourg",
        "ports": "LUX",
        "country": "LU",
        "name": "LU"
      },
      {
        "value": "Luxembourg",
        "label": "Luxembourg",
        "name": "LUX",
        "ports": "LUX",
        "country": "LU"
      }
    ]
  },
  {
    "label": "Latvia",
    "options": [
      {
        "label": "Latvia (all airports)",
        "value": "Latvia",
        "ports": "LPX_RIX",
        "country": "LV",
        "name": "LV"
      },
      {
        "value": "Liepaja",
        "label": "Liepaja",
        "name": "LPX",
        "ports": "LPX",
        "country": "LV"
      },
      {
        "value": "Riga",
        "label": "Riga",
        "name": "RIX",
        "ports": "RIX",
        "country": "LV"
      }
    ]
  },
  {
    "label": "Macedonia",
    "options": [
      {
        "label": "Macedonia (all airports)",
        "value": "Macedonia",
        "ports": "OHD_SKP",
        "country": "MK",
        "name": "MK"
      },
      {
        "value": "Ohrid",
        "label": "Ohrid",
        "name": "OHD",
        "ports": "OHD",
        "country": "MK"
      },
      {
        "value": "Skopje",
        "label": "Skopje",
        "name": "SKP",
        "ports": "SKP",
        "country": "MK"
      }
    ]
  },
  {
    "label": "Malta",
    "options": [
      {
        "label": "Malta (all airports)",
        "value": "Malta",
        "ports": "MLA",
        "country": "MT",
        "name": "MT"
      },
      {
        "value": "Malta",
        "label": "Malta",
        "name": "MLA",
        "ports": "MLA",
        "country": "MT"
      }
    ]
  },
  {
    "label": "Netherlands",
    "options": [
      {
        "label": "Netherlands (all airports)",
        "value": "Netherlands",
        "ports": "AMS_MST_EIN_GRQ_RTM",
        "country": "NL",
        "name": "NL"
      },
      {
        "value": "Amsterdam",
        "label": "Amsterdam",
        "name": "AMS",
        "ports": "AMS",
        "country": "NL"
      },
      {
        "value": "Maastricht-Aachen",
        "label": "Maastricht-Aachen",
        "name": "MST",
        "ports": "MST",
        "country": "NL"
      },
      {
        "value": "Eindhoven",
        "label": "Eindhoven",
        "name": "EIN",
        "ports": "EIN",
        "country": "NL"
      },
      {
        "value": "Groningen",
        "label": "Groningen",
        "name": "GRQ",
        "ports": "GRQ",
        "country": "NL"
      },
      {
        "value": "Rotterdam",
        "label": "Rotterdam",
        "name": "RTM",
        "ports": "RTM",
        "country": "NL"
      }
    ]
  },
  {
    "label": "Norway",
    "options": [
      {
        "label": "Norway  (all airports)",
        "value": "Norway",
        "ports": "AES_ANX_ALF_BNN_BOO_BGO_BJF_KRS_BDU_EVE_FRO_OSL_HAU_HAA_KSU_KKN_MOL_MJF_LKL_RRS_SSJ_TOS_TRF_TRD_SVG_HFT_HVG_MEH_VDS_HOV_BVG_FDE_LKN_OSY_MQN_RVK_RET_SDN_SOG_SVJ_SOJ_VAW",
        "country": "NO",
        "name": "NO"
      },
      {
        "value": "Aalesund",
        "label": "Aalesund",
        "name": "AES",
        "ports": "AES",
        "country": "NO"
      },
      {
        "value": "Andenes",
        "label": "Andenes",
        "name": "ANX",
        "ports": "ANX",
        "country": "NO"
      },
      {
        "value": "Alta",
        "label": "Alta",
        "name": "ALF",
        "ports": "ALF",
        "country": "NO"
      },
      {
        "value": "Bronnoysund",
        "label": "Bronnoysund",
        "name": "BNN",
        "ports": "BNN",
        "country": "NO"
      },
      {
        "value": "Bodo",
        "label": "Bodo",
        "name": "BOO",
        "ports": "BOO",
        "country": "NO"
      },
      {
        "value": "Bergen",
        "label": "Bergen",
        "name": "BGO",
        "ports": "BGO",
        "country": "NO"
      },
      {
        "value": "Batsfjord",
        "label": "Batsfjord",
        "name": "BJF",
        "ports": "BJF",
        "country": "NO"
      },
      {
        "value": "Kristiansand",
        "label": "Kristiansand",
        "name": "KRS",
        "ports": "KRS",
        "country": "NO"
      },
      {
        "value": "Bardufoss",
        "label": "Bardufoss",
        "name": "BDU",
        "ports": "BDU",
        "country": "NO"
      },
      {
        "value": "Harstad-Narvik (Evenes)",
        "label": "Harstad-Narvik (Evenes)",
        "name": "EVE",
        "ports": "EVE",
        "country": "NO"
      },
      {
        "value": "Floro",
        "label": "Floro",
        "name": "FRO",
        "ports": "FRO",
        "country": "NO"
      },
      {
        "value": "Haugesund",
        "label": "Haugesund",
        "name": "HAU",
        "ports": "HAU",
        "country": "NO"
      },
      {
        "value": "Hasvik",
        "label": "Hasvik",
        "name": "HAA",
        "ports": "HAA",
        "country": "NO"
      },
      {
        "value": "Kristiansund",
        "label": "Kristiansund",
        "name": "KSU",
        "ports": "KSU",
        "country": "NO"
      },
      {
        "value": "Kirkenes",
        "label": "Kirkenes",
        "name": "KKN",
        "ports": "KKN",
        "country": "NO"
      },
      {
        "value": "Molde",
        "label": "Molde",
        "name": "MOL",
        "ports": "MOL",
        "country": "NO"
      },
      {
        "value": "Mosjoen",
        "label": "Mosjoen",
        "name": "MJF",
        "ports": "MJF",
        "country": "NO"
      },
      {
        "value": "Lakselv (Banak)",
        "label": "Lakselv (Banak)",
        "name": "LKL",
        "ports": "LKL",
        "country": "NO"
      },
      {
        "value": "Roros",
        "label": "Roros",
        "name": "RRS",
        "ports": "RRS",
        "country": "NO"
      },
      {
        "value": "Sandnessjoen",
        "label": "Sandnessjoen",
        "name": "SSJ",
        "ports": "SSJ",
        "country": "NO"
      },
      {
        "value": "Tromso",
        "label": "Tromso",
        "name": "TOS",
        "ports": "TOS",
        "country": "NO"
      },
      {
        "value": "Trondheim",
        "label": "Trondheim",
        "name": "TRD",
        "ports": "TRD",
        "country": "NO"
      },
      {
        "value": "Stavanger",
        "label": "Stavanger",
        "name": "SVG",
        "ports": "SVG",
        "country": "NO"
      },
      {
        "value": "Hammerfest",
        "label": "Hammerfest",
        "name": "HFT",
        "ports": "HFT",
        "country": "NO"
      },
      {
        "value": "Honningsvag",
        "label": "Honningsvag",
        "name": "HVG",
        "ports": "HVG",
        "country": "NO"
      },
      {
        "value": "Mehamn",
        "label": "Mehamn",
        "name": "MEH",
        "ports": "MEH",
        "country": "NO"
      },
      {
        "value": "Vadso",
        "label": "Vadso",
        "name": "VDS",
        "ports": "VDS",
        "country": "NO"
      },
      {
        "value": "Orsta-Volda",
        "label": "Orsta-Volda",
        "name": "HOV",
        "ports": "HOV",
        "country": "NO"
      },
      {
        "value": "Berlevag",
        "label": "Berlevag",
        "name": "BVG",
        "ports": "BVG",
        "country": "NO"
      },
      {
        "value": "Forde",
        "label": "Forde",
        "name": "FDE",
        "ports": "FDE",
        "country": "NO"
      },
      {
        "value": "Leknes",
        "label": "Leknes",
        "name": "LKN",
        "ports": "LKN",
        "country": "NO"
      },
      {
        "value": "Namsos",
        "label": "Namsos",
        "name": "OSY",
        "ports": "OSY",
        "country": "NO"
      },
      {
        "value": "Mo i Rana",
        "label": "Mo i Rana",
        "name": "MQN",
        "ports": "MQN",
        "country": "NO"
      },
      {
        "value": "Roervik",
        "label": "Roervik",
        "name": "RVK",
        "ports": "RVK",
        "country": "NO"
      },
      {
        "value": "Rost (Lofoten)",
        "label": "Rost (Lofoten)",
        "name": "RET",
        "ports": "RET",
        "country": "NO"
      },
      {
        "value": "Sandane",
        "label": "Sandane",
        "name": "SDN",
        "ports": "SDN",
        "country": "NO"
      },
      {
        "value": "Sogndal",
        "label": "Sogndal",
        "name": "SOG",
        "ports": "SOG",
        "country": "NO"
      },
      {
        "value": "Svolvaer",
        "label": "Svolvaer",
        "name": "SVJ",
        "ports": "SVJ",
        "country": "NO"
      },
      {
        "value": "Sorkjosen",
        "label": "Sorkjosen",
        "name": "SOJ",
        "ports": "SOJ",
        "country": "NO"
      },
      {
        "value": "Vardoe",
        "label": "Vardoe",
        "name": "VAW",
        "ports": "VAW",
        "country": "NO"
      }
    ]
  },
  {
    "label": "Oslo, Norway",
    "options": [
      {
        "value": "Oslo",
        "label": "Oslo (all airports)",
        "name": "OSL_ALL",
        "ports": "OSL_TRF_RYG",
        "country": "NO"
      },
      {
        "value": "Oslo (Gardermoen)",
        "label": "Oslo (Gardermoen)",
        "name": "OSL",
        "ports": "OSL",
        "country": "NO"
      },
      {
        "value": "Oslo (Torp)",
        "label": "Oslo (Torp)",
        "name": "TRF",
        "ports": "TRF",
        "country": "NO"
      }
    ]
  },
  {
    "label": "Poland",
    "options": [
      {
        "label": "Poland (all airports)",
        "value": "Poland",
        "ports": "SZY_GDN_KRK_KTW_POZ_RZE_SZZ_WAW_WRO_BZG_LCJ_WMI_LUZ",
        "country": "PL",
        "name": "PL"
      },
      {
        "value": "Olsztyn-Mazury",
        "label": "Olsztyn-Mazury",
        "name": "SZY",
        "ports": "SZY",
        "country": "PL"
      },
      {
        "value": "Gdansk",
        "label": "Gdansk",
        "name": "GDN",
        "ports": "GDN",
        "country": "PL"
      },
      {
        "value": "Krakow",
        "label": "Krakow",
        "name": "KRK",
        "ports": "KRK",
        "country": "PL"
      },
      {
        "value": "Katowice",
        "label": "Katowice",
        "name": "KTW",
        "ports": "KTW",
        "country": "PL"
      },
      {
        "value": "Poznan",
        "label": "Poznan",
        "name": "POZ",
        "ports": "POZ",
        "country": "PL"
      },
      {
        "value": "Rzeszow-Jasionka",
        "label": "Rzeszow-Jasionka",
        "name": "RZE",
        "ports": "RZE",
        "country": "PL"
      },
      {
        "value": "Szczecin",
        "label": "Szczecin",
        "name": "SZZ",
        "ports": "SZZ",
        "country": "PL"
      },
      {
        "value": "Wroclaw",
        "label": "Wroclaw",
        "name": "WRO",
        "ports": "WRO",
        "country": "PL"
      },
      {
        "value": "Bydgoszcz",
        "label": "Bydgoszcz",
        "name": "BZG",
        "ports": "BZG",
        "country": "PL"
      },
      {
        "value": "Lodz",
        "label": "Lodz",
        "name": "LCJ",
        "ports": "LCJ",
        "country": "PL"
      },
      {
        "value": "Lublin",
        "label": "Lublin",
        "name": "LUZ",
        "ports": "LUZ",
        "country": "PL"
      }
    ]
  },
  {
    "label": "Warsaw, Poland",
    "options": [
      {
        "value": "Warsaw",
        "label": "Warsaw (all airports)",
        "name": "WAR_ALL",
        "ports": "WAW_WMI",
        "country": "PL"
      },
      {
        "value": "Warsaw",
        "label": "Warsaw",
        "name": "WAW",
        "ports": "WAW",
        "country": "PL"
      },
      {
        "value": "Warsaw (Modlin)",
        "label": "Warsaw (Modlin)",
        "name": "WMI",
        "ports": "WMI",
        "country": "PL"
      }
    ]
  },
  {
    "label": "Portugal",
    "options": [
      {
        "label": "Portugal (all airports)",
        "value": "Portugal",
        "ports": "FAO_TER_PDL_OPO_PXO_LIS_FNC",
        "country": "PT",
        "name": "PT"
      },
      {
        "value": "Faro",
        "label": "Faro",
        "name": "FAO",
        "ports": "FAO",
        "country": "PT"
      },
      {
        "value": "Terceira Lajes (Azores)",
        "label": "Terceira Lajes (Azores)",
        "name": "TER",
        "ports": "TER",
        "country": "PT"
      },
      {
        "value": "Ponta Delgada (Azores)",
        "label": "Ponta Delgada (Azores)",
        "name": "PDL",
        "ports": "PDL",
        "country": "PT"
      },
      {
        "value": "Porto",
        "label": "Porto",
        "name": "OPO",
        "ports": "OPO",
        "country": "PT"
      },
      {
        "value": "Porto Santo",
        "label": "Porto Santo",
        "name": "PXO",
        "ports": "PXO",
        "country": "PT"
      },
      {
        "value": "Lisbon",
        "label": "Lisbon",
        "name": "LIS",
        "ports": "LIS",
        "country": "PT"
      },
      {
        "value": "Madeira (Funchal)",
        "label": "Madeira (Funchal)",
        "name": "FNC",
        "ports": "FNC",
        "country": "PT"
      }
    ]
  },
  {
    "label": "Romania",
    "options": [
      {
        "label": "Romania (all airports)",
        "value": "Romania",
        "ports": "BCM_CND_CLJ_CRA_IAS_OMR_OTP_SBZ_SUJ_SCV_TGM_TSR",
        "country": "RO",
        "name": "RO"
      },
      {
        "value": "Bucharest",
        "label": "Bucharest (all airports)",
        "name": "BUH_ALL",
        "ports": "OTP_BBU",
        "country": "RO"
      },
      {
        "value": "Bacau",
        "label": "Bacau",
        "name": "BCM",
        "ports": "BCM",
        "country": "RO"
      },
      {
        "value": "Constanta",
        "label": "Constanta",
        "name": "CND",
        "ports": "CND",
        "country": "RO"
      },
      {
        "value": "Cluj-Napoca",
        "label": "Cluj-Napoca",
        "name": "CLJ",
        "ports": "CLJ",
        "country": "RO"
      },
      {
        "value": "Craiova",
        "label": "Craiova",
        "name": "CRA",
        "ports": "CRA",
        "country": "RO"
      },
      {
        "value": "Iasi",
        "label": "Iasi",
        "name": "IAS",
        "ports": "IAS",
        "country": "RO"
      },
      {
        "value": "Oradea",
        "label": "Oradea",
        "name": "OMR",
        "ports": "OMR",
        "country": "RO"
      },
      {
        "value": "Bucharest (Otopeni)",
        "label": "Bucharest (Otopeni)",
        "name": "OTP",
        "ports": "OTP",
        "country": "RO"
      },
      {
        "value": "Sibiu",
        "label": "Sibiu",
        "name": "SBZ",
        "ports": "SBZ",
        "country": "RO"
      },
      {
        "value": "Satu Mare",
        "label": "Satu Mare",
        "name": "SUJ",
        "ports": "SUJ",
        "country": "RO"
      },
      {
        "value": "Suceava",
        "label": "Suceava",
        "name": "SCV",
        "ports": "SCV",
        "country": "RO"
      },
      {
        "value": "Tirgu Mures",
        "label": "Tirgu Mures",
        "name": "TGM",
        "ports": "TGM",
        "country": "RO"
      },
      {
        "value": "Timisoara",
        "label": "Timisoara",
        "name": "TSR",
        "ports": "TSR",
        "country": "RO"
      }
    ]
  },
  {
    "label": "Russian Federation",
    "options": [
      {
        "label": "Russian Federation (all airports)",
        "value": "Russian Federation"
      },
      {
        "value": "Irkutsk",
        "label": "Irkutsk",
        "name": "IKT",
        "ports": "IKT",
        "country": "RU"
      },
      {
        "value": "Ulan-Ude (Baikal)",
        "label": "Ulan-Ude (Baikal)",
        "name": "UUD",
        "ports": "UUD",
        "country": "RU"
      },
      {
        "value": "St Petersburg",
        "label": "St Petersburg",
        "name": "LED",
        "ports": "LED",
        "country": "RU"
      },
      {
        "value": "Murmansk",
        "label": "Murmansk",
        "name": "MMK",
        "ports": "MMK",
        "country": "RU"
      },
      {
        "value": "Kaliningrad",
        "label": "Kaliningrad",
        "name": "KGD",
        "ports": "KGD",
        "country": "RU"
      },
      {
        "value": "Kemerovo",
        "label": "Kemerovo",
        "name": "KEJ",
        "ports": "KEJ",
        "country": "RU"
      },
      {
        "value": "Krasnodar",
        "label": "Krasnodar",
        "name": "KRR",
        "ports": "KRR",
        "country": "RU"
      },
      {
        "value": "Makhachkala",
        "label": "Makhachkala",
        "name": "MCX",
        "ports": "MCX",
        "country": "RU"
      },
      {
        "value": "Mineralnye Vody",
        "label": "Mineralnye Vody",
        "name": "MRV",
        "ports": "MRV",
        "country": "RU"
      },
      {
        "value": "Rostov-on-Don",
        "label": "Rostov-on-Don",
        "name": "ROV",
        "ports": "ROV",
        "country": "RU"
      },
      {
        "value": "Sochi",
        "label": "Sochi",
        "name": "AER",
        "ports": "AER",
        "country": "RU"
      },
      {
        "value": "Astrakhan",
        "label": "Astrakhan",
        "name": "ASF",
        "ports": "ASF",
        "country": "RU"
      },
      {
        "value": "Volgograd",
        "label": "Volgograd",
        "name": "VOG",
        "ports": "VOG",
        "country": "RU"
      },
      {
        "value": "Chelyabinsk",
        "label": "Chelyabinsk",
        "name": "CEK",
        "ports": "CEK",
        "country": "RU"
      },
      {
        "value": "Perm",
        "label": "Perm",
        "name": "PEE",
        "ports": "PEE",
        "country": "RU"
      },
      {
        "value": "Surgut",
        "label": "Surgut",
        "name": "SGC",
        "ports": "SGC",
        "country": "RU"
      },
      {
        "value": "Ekaterinburg",
        "label": "Ekaterinburg",
        "name": "SVX",
        "ports": "SVX",
        "country": "RU"
      },
      {
        "value": "Voronezh",
        "label": "Voronezh",
        "name": "VOZ",
        "ports": "VOZ",
        "country": "RU"
      },
      {
        "value": "Syktyvkar",
        "label": "Syktyvkar",
        "name": "SCW",
        "ports": "SCW",
        "country": "RU"
      },
      {
        "value": "Kazan",
        "label": "Kazan",
        "name": "KZN",
        "ports": "KZN",
        "country": "RU"
      },
      {
        "value": "Ufa",
        "label": "Ufa",
        "name": "UFA",
        "ports": "UFA",
        "country": "RU"
      },
      {
        "value": "Novosibirsk (Tolmachevo)",
        "label": "Novosibirsk (Tolmachevo)",
        "name": "OVB",
        "ports": "OVB",
        "country": "RU"
      },
      {
        "value": "Samara",
        "label": "Samara",
        "name": "KUF",
        "ports": "KUF",
        "country": "RU"
      },
      {
        "value": "Tomsk",
        "label": "Tomsk",
        "name": "TOF",
        "ports": "TOF",
        "country": "RU"
      },
      {
        "value": "Arkhangelsk",
        "label": "Arkhangelsk",
        "name": "ARH",
        "ports": "ARH",
        "country": "RU"
      },
      {
        "value": "Krasnoyarsk",
        "label": "Krasnoyarsk",
        "name": "KJA",
        "ports": "KJA",
        "country": "RU"
      },
      {
        "value": "Grozny",
        "label": "Grozny",
        "name": "GRV",
        "ports": "GRV",
        "country": "RU"
      },
      {
        "value": "Vladikavkaz-Beslan",
        "label": "Vladikavkaz-Beslan",
        "name": "OGZ",
        "ports": "OGZ",
        "country": "RU"
      },
      {
        "value": "Kirov (Pobedilovo)",
        "label": "Kirov (Pobedilovo)",
        "name": "KVX",
        "ports": "KVX",
        "country": "RU"
      },
      {
        "value": "Cheboksary",
        "label": "Cheboksary",
        "name": "CSY",
        "ports": "CSY",
        "country": "RU"
      },
      {
        "value": "Nizhnekamsk",
        "label": "Nizhnekamsk",
        "name": "NBC",
        "ports": "NBC",
        "country": "RU"
      },
      {
        "value": "Gelendzik",
        "label": "Gelendzik",
        "name": "GDZ",
        "ports": "GDZ",
        "country": "RU"
      },
      {
        "value": "Magas",
        "label": "Magas",
        "name": "IGT",
        "ports": "IGT",
        "country": "RU"
      }
    ]
  },
  {
    "label": "Moscow, Russia",
    "options": [
      {
        "value": "Moscow",
        "label": "Moscow (all airports)",
        "name": "MOW_ALL",
        "ports": "DME_SVO_VKO_BKA",
        "country": "RU"
      },
      {
        "value": "Moscow (Sheremetyevo)",
        "label": "Moscow (Sheremetyevo)",
        "name": "SVO",
        "ports": "SVO",
        "country": "RU"
      },
      {
        "value": "Moscow (Vnukovo)",
        "label": "Moscow (Vnukovo)",
        "name": "VKO",
        "ports": "VKO",
        "country": "RU"
      },
      {
        "value": "Moscow (Domodedovo)",
        "label": "Moscow (Domodedovo)",
        "name": "DME",
        "ports": "DME",
        "country": "RU"
      },
      {
        "value": "Moscow (Zhukovsky)",
        "label": "Moscow (Zhukovsky)",
        "name": "ZIA",
        "ports": "ZIA",
        "country": "RU"
      }
    ]
  },
  {
    "label": "Sweden",
    "options": [
      {
        "label": "Sweden (all airports)",
        "value": "Sweden",
        "ports": "GOT_NYO_MMX_VXO_KRN_SFT_UME_VST_LLA_ARN_VBY_OSD_KSD",
        "country": "SE",
        "name": "SE"
      },
      {
        "value": "Goteborg (Landvetter)",
        "label": "Goteborg (Landvetter)",
        "name": "GOT",
        "ports": "GOT",
        "country": "SE"
      },
      {
        "value": "Malmo",
        "label": "Malmo",
        "name": "MMX",
        "ports": "MMX",
        "country": "SE"
      },
      {
        "value": "Vaxjo",
        "label": "Vaxjo",
        "name": "VXO",
        "ports": "VXO",
        "country": "SE"
      },
      {
        "value": "Kiruna",
        "label": "Kiruna",
        "name": "KRN",
        "ports": "KRN",
        "country": "SE"
      },
      {
        "value": "Skelleftea",
        "label": "Skelleftea",
        "name": "SFT",
        "ports": "SFT",
        "country": "SE"
      },
      {
        "value": "Umea",
        "label": "Umea",
        "name": "UME",
        "ports": "UME",
        "country": "SE"
      },
      {
        "value": "Lulea",
        "label": "Lulea",
        "name": "LLA",
        "ports": "LLA",
        "country": "SE"
      },
      {
        "value": "Visby",
        "label": "Visby",
        "name": "VBY",
        "ports": "VBY",
        "country": "SE"
      },
      {
        "value": "Ostersund",
        "label": "Ostersund",
        "name": "OSD",
        "ports": "OSD",
        "country": "SE"
      },
      {
        "value": "Karlstad",
        "label": "Karlstad",
        "name": "KSD",
        "ports": "KSD",
        "country": "SE"
      }
    ]
  },
  {
    "label": "Stockholm, Sweden",
    "options": [
      {
        "value": "Stockholm",
        "label": "Stockholm (all airports)",
        "name": "STO_ALL",
        "ports": "ARN_BMA_NYO_VST",
        "country": "SE"
      },
      {
        "value": "Stockholm (Skavsta)",
        "label": "Stockholm (Skavsta)",
        "name": "NYO",
        "ports": "NYO",
        "country": "SE"
      },
      {
        "value": "Stockholm (Vasteras)",
        "label": "Stockholm (Vasteras)",
        "name": "VST",
        "ports": "VST",
        "country": "SE"
      },
      {
        "value": "Stockholm (Arlanda)",
        "label": "Stockholm (Arlanda)",
        "name": "ARN",
        "ports": "ARN",
        "country": "SE"
      }
    ]
  },
  {
    "label": "Slovenia",
    "options": [
      {
        "label": "Slovenia (all airports)",
        "value": "Slovenia",
        "ports": "LJU",
        "country": "SI",
        "name": "SI"
      },
      {
        "value": "Ljubljana",
        "label": "Ljubljana",
        "name": "LJU",
        "ports": "LJU",
        "country": "SI"
      }
    ]
  },
  {
    "label": "Slovakia",
    "options": [
      {
        "label": "Slovakia (all airports)",
        "value": "Slovakia",
        "ports": "BTS_KSC_TAT",
        "country": "SK",
        "name": "SK"
      },
      {
        "value": "Bratislava",
        "label": "Bratislava",
        "name": "BTS",
        "ports": "BTS",
        "country": "SK"
      },
      {
        "value": "Kosice",
        "label": "Kosice",
        "name": "KSC",
        "ports": "KSC",
        "country": "SK"
      },
      {
        "value": "Poprad-Tatry",
        "label": "Poprad-Tatry",
        "name": "TAT",
        "ports": "TAT",
        "country": "SK"
      }
    ]
  },
  {
    "label": "Turkey",
    "options": [
      {
        "label": "Turkey (all airports)",
        "value": "Turkey",
        "ports": "ESB_ADA_AYT_GZT_KYA_MZH_VAS_MLX_ASR_DNZ_IST_ADB_DLM_EZS_DIY_ERC_ERZ_TZX_VAN_BAL_BJV_SAW_USQ_KSY_KCM_AJI_ADF_EDO_SZF_MQM_AOE_CKZ_MSR_NOP_TEQ_HTY_GZP_KZR_GNY_KFS_OGU_BGG",
        "country": "TR",
        "name": "TR"
      },
      {
        "value": "Ankara",
        "label": "Ankara",
        "name": "ESB",
        "ports": "ESB",
        "country": "TR"
      },
      {
        "value": "Adana",
        "label": "Adana",
        "name": "ADA",
        "ports": "ADA",
        "country": "TR"
      },
      {
        "value": "Antalya",
        "label": "Antalya",
        "name": "AYT",
        "ports": "AYT",
        "country": "TR"
      },
      {
        "value": "Gaziantep",
        "label": "Gaziantep",
        "name": "GZT",
        "ports": "GZT",
        "country": "TR"
      },
      {
        "value": "Konya",
        "label": "Konya",
        "name": "KYA",
        "ports": "KYA",
        "country": "TR"
      },
      {
        "value": "Merzifon",
        "label": "Merzifon",
        "name": "MZH",
        "ports": "MZH",
        "country": "TR"
      },
      {
        "value": "Sivas",
        "label": "Sivas",
        "name": "VAS",
        "ports": "VAS",
        "country": "TR"
      },
      {
        "value": "Malatya",
        "label": "Malatya",
        "name": "MLX",
        "ports": "MLX",
        "country": "TR"
      },
      {
        "value": "Kayseri",
        "label": "Kayseri",
        "name": "ASR",
        "ports": "ASR",
        "country": "TR"
      },
      {
        "value": "Denizli Cardak",
        "label": "Denizli Cardak",
        "name": "DNZ",
        "ports": "DNZ",
        "country": "TR"
      },
      {
        "value": "Izmir",
        "label": "Izmir",
        "name": "ADB",
        "ports": "ADB",
        "country": "TR"
      },
      {
        "value": "Dalaman",
        "label": "Dalaman",
        "name": "DLM",
        "ports": "DLM",
        "country": "TR"
      },
      {
        "value": "Elazig",
        "label": "Elazig",
        "name": "EZS",
        "ports": "EZS",
        "country": "TR"
      },
      {
        "value": "Diyarbakir",
        "label": "Diyarbakir",
        "name": "DIY",
        "ports": "DIY",
        "country": "TR"
      },
      {
        "value": "Erzincan",
        "label": "Erzincan",
        "name": "ERC",
        "ports": "ERC",
        "country": "TR"
      },
      {
        "value": "Erzurum",
        "label": "Erzurum",
        "name": "ERZ",
        "ports": "ERZ",
        "country": "TR"
      },
      {
        "value": "Trabzon",
        "label": "Trabzon",
        "name": "TZX",
        "ports": "TZX",
        "country": "TR"
      },
      {
        "value": "Van",
        "label": "Van",
        "name": "VAN",
        "ports": "VAN",
        "country": "TR"
      },
      {
        "value": "Batman",
        "label": "Batman",
        "name": "BAL",
        "ports": "BAL",
        "country": "TR"
      },
      {
        "value": "Bodrum",
        "label": "Bodrum",
        "name": "BJV",
        "ports": "BJV",
        "country": "TR"
      },
      {
        "value": "Usak",
        "label": "Usak",
        "name": "USQ",
        "ports": "USQ",
        "country": "TR"
      },
      {
        "value": "Kars",
        "label": "Kars",
        "name": "KSY",
        "ports": "KSY",
        "country": "TR"
      },
      {
        "value": "Kahramanmaras",
        "label": "Kahramanmaras",
        "name": "KCM",
        "ports": "KCM",
        "country": "TR"
      },
      {
        "value": "Agri",
        "label": "Agri",
        "name": "AJI",
        "ports": "AJI",
        "country": "TR"
      },
      {
        "value": "Adiyaman",
        "label": "Adiyaman",
        "name": "ADF",
        "ports": "ADF",
        "country": "TR"
      },
      {
        "value": "Edremit",
        "label": "Edremit",
        "name": "EDO",
        "ports": "EDO",
        "country": "TR"
      },
      {
        "value": "Samsun-Carsamba",
        "label": "Samsun-Carsamba",
        "name": "SZF",
        "ports": "SZF",
        "country": "TR"
      },
      {
        "value": "Mardin",
        "label": "Mardin",
        "name": "MQM",
        "ports": "MQM",
        "country": "TR"
      },
      {
        "value": "Eskisehir",
        "label": "Eskisehir",
        "name": "AOE",
        "ports": "AOE",
        "country": "TR"
      },
      {
        "value": "Canakkale",
        "label": "Canakkale",
        "name": "CKZ",
        "ports": "CKZ",
        "country": "TR"
      },
      {
        "value": "Mus",
        "label": "Mus",
        "name": "MSR",
        "ports": "MSR",
        "country": "TR"
      },
      {
        "value": "Sinop",
        "label": "Sinop",
        "name": "NOP",
        "ports": "NOP",
        "country": "TR"
      },
      {
        "value": "Tekirdag",
        "label": "Tekirdag",
        "name": "TEQ",
        "ports": "TEQ",
        "country": "TR"
      },
      {
        "value": "Hatay",
        "label": "Hatay",
        "name": "HTY",
        "ports": "HTY",
        "country": "TR"
      },
      {
        "value": "Gazipasa",
        "label": "Gazipasa",
        "name": "GZP",
        "ports": "GZP",
        "country": "TR"
      },
      {
        "value": "Zafer",
        "label": "Zafer",
        "name": "KZR",
        "ports": "KZR",
        "country": "TR"
      },
      {
        "value": "Sanliurfa",
        "label": "Sanliurfa",
        "name": "GNY",
        "ports": "GNY",
        "country": "TR"
      },
      {
        "value": "Kastamonu",
        "label": "Kastamonu",
        "name": "KFS",
        "ports": "KFS",
        "country": "TR"
      },
      {
        "value": "Ordu-Giresun",
        "label": "Ordu-Giresun",
        "name": "OGU",
        "ports": "OGU",
        "country": "TR"
      },
      {
        "value": "Bingol",
        "label": "Bingol",
        "name": "BGG",
        "ports": "BGG",
        "country": "TR"
      }
    ]
  },
  {
    "label": "Istanbul, Turkey",
    "options": [
      {
        "value": "Istanbul",
        "label": "Istanbul (all airports)",
        "name": "IST_ALL",
        "ports": "IST_SAW",
        "country": "TR"
      },
      {
        "value": "Istanbul (Ataturk)",
        "label": "Istanbul (Ataturk)",
        "name": "IST",
        "ports": "IST",
        "country": "TR"
      },
      {
        "value": "Istanbul (Sabiha Gokcen)",
        "label": "Istanbul (Sabiha Gokcen)",
        "name": "SAW",
        "ports": "SAW",
        "country": "TR"
      }
    ]
  }
];

function getMonday(d) {
  d = new Date(d);
  var day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
  return new Date(d.setDate(diff));
}

function getWeekNumber(d) {
  // Copy date so don't modify original
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
  // Get first day of year
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
  // Calculate full weeks to nearest Thursday
  var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
  // Return array of year and week number
  return [d.getUTCFullYear(), weekNo];
}


function getWeekendOptions() {
  var options = [],
    weekendsGroups = [],
    startDate = getMonday(new Date()), // get monday from current week
    labels = [startDate.getFullYear()],
    defaultWeek = getWeekNumber(new Date())[1] + 3,
    defaultWeekend = '',
    end = new Date(startDate.getTime());

  end.setDate(end.getDate() + 183);
  for (var d = new Date(startDate.getTime()); d <= end; d.setDate(d.getDate() + 7)) {
    var saturday = new Date(d.getTime()),
      sunday = new Date(d.getTime()),
      label = '';

    saturday.setDate(saturday.getDate() + 5);
    sunday.setDate(sunday.getDate() + 6);

    if (labels.indexOf(saturday.getFullYear()) === -1) {
      weekendsGroups.push({
        "label": (saturday.getFullYear() - 1),
        "options": options
      });
      options = [];
      labels.push(saturday.getFullYear());
    }

    label = "Weekend " + getWeekNumber(d)[1] + " - " 
      + saturday.getDate() + "." + (saturday.getMonth() + 1) + " - "
      + sunday.getDate() + "." + (sunday.getMonth() + 1);

    var option = {
        "value": getWeekNumber(d)[1],
        "label": label,
    };
    

    if (defaultWeek === getWeekNumber(d)[1]) {
      defaultWeekend = option;
      // option.selected = true;
      // debugger;
    }
    options.push(option);
  };

  weekendsGroups.push({
    "label": d.getFullYear(),
    "options": options
  });
  // debugger;

  return [weekendsGroups, defaultWeekend];
}

const fromDefault = {
  "value": "London",
  "label": "London (all airports)",
  "name": "LON_ALL",
  "ports": "LGW_STN_LTN_LCY_LHR_SEN_BQH",
  "country": "GB"
};

const fetchConfig = {
  mode: "cors",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  method: 'GET',
  redirect: "follow"
};

const weekendParts = 4;

const apiLocation = (window.location.hostname === 'localhost') ? 'api/' : 'http://api.weekendflights.eu/'; 

const [weekends, weekendDefault] = getWeekendOptions();

export {airports, weekends, fromDefault, weekendDefault, weekendParts, apiLocation, fetchConfig };

// export const weekends = weekendsGroups;
// export const weekendsDefault = defaultWeekend; //"aaaa";// getWeekNumber(new Date())[1] + 3