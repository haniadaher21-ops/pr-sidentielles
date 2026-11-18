const fiches = [
  [
    "budget",
    "Pouvoir d’achat et logement",
    "Courses, énergie, carburant, aide au logement",
    "Comment le programme veut-il réduire mes dépenses courantes ?",
    "+10 %",
    "sur les aides personnelles au logement (APL), selon la proposition",
    [
      "Encadrer ou bloquer les prix de produits essentiels dans l’alimentation, l’énergie et le carburant.",
      "Interdire de réduire la quantité vendue sans diminuer le prix.",
      "Constituer des stocks de certaines matières premières alimentaires pour amortir les variations de prix."
    ],
    "Pour une aide de 200 € par mois, une hausse de 10 % donnerait 220 € à paramètres inchangés. C’est un calcul illustratif, sans simulation d’éligibilité.",
    "Quels produits seraient concernés et comment éviter les ruptures de stock ?",
    "Les listes de produits, leurs plafonds et la durée du dispositif détermineraient l’effet sur le panier. Les stocks sont l’un des mécanismes annoncés.",
    [
      [
        "Prix et aides au logement",
        "une-economie-au-service-des-besoins/chapitre2"
      ]
    ],
    [
      "Aide d’exemple par mois",
      [
        "Avant la hausse illustrée",
        200
      ],
      [
        "Après la hausse illustrée",
        220
      ],
      " €"
    ]
  ],
  [
    "travail",
    "Travail, salaires et entreprises",
    "SMIC, inflation, PME",
    "Qui verrait son salaire augmenter ?",
    "1 700 €",
    "de SMIC net mensuel proposé",
    [
      "Porter immédiatement le SMIC à 1 700 € nets par mois.",
      "Faire évoluer les salaires du privé et du public avec l’inflation.",
      "Créer un barème progressif pour l’impôt sur les sociétés et moduler cet impôt selon l’usage des bénéfices pour encourager leur réinvestissement."
    ],
    "Une hausse du SMIC affecterait directement le salaire minimum. Pour les revenus au-dessus du minimum, le programme prévoit notamment une indexation sur les prix et des négociations par branche.",
    "Comment les petites entreprises absorberaient-elles la hausse ?",
    "L’effet dépendrait de leur masse salariale, de leurs marges et des modalités des mesures fiscales et salariales.",
    [
      [
        "Salaires et fiscalité des entreprises",
        "une-economie-au-service-des-besoins/chapitre2"
      ]
    ]
  ],
  [
    "impots",
    "Impôts et financement",
    "Barème, patrimoine, héritages",
    "Qui paierait plus et comment financer les mesures ?",
    "14 tranches",
    "proposées pour l’impôt sur le revenu",
    [
      "Passer de 5 à 14 tranches d’impôt sur le revenu selon le point de départ du programme.",
      "Rétablir et renforcer l’impôt sur la fortune et instaurer un minimum d’imposition de 2 % pour les patrimoines des centimillionnaires.",
      "Exonérer les héritages inférieurs à 150 000 € et instaurer un héritage maximal de 12 millions d’euros."
    ],
    "Une tranche est une portion du revenu à laquelle s’applique un taux. Pour calculer l’effet sur un foyer, il faut les seuils, les taux et les règles applicables à sa situation.",
    "Les nouvelles recettes couvriraient-elles les dépenses ?",
    "Il faut rapprocher le rendement estimé de chaque recette du coût de chaque mesure, année par année. Le rendement dépend notamment des règles retenues et du comportement des contribuables.",
    [
      [
        "Propositions fiscales",
        "une-economie-au-service-des-besoins/chapitre2"
      ],
      [
        "Plans d’investissement",
        "/programme/plans-investissement/"
      ]
    ],
    [
      "Nombre de tranches",
      [
        "Point de départ indiqué",
        5
      ],
      [
        "Proposition",
        14
      ],
      ""
    ]
  ],
  [
    "retraites",
    "Retraites et autonomie",
    "Pensions, âge de départ, EHPAD",
    "Ma pension pourrait-elle augmenter ?",
    "60 ans",
    "âge visé à taux plein avec 40 années cotisées",
    [
      "Revenir progressivement au départ à taux plein à 60 ans après 40 années de cotisations.",
      "Porter au moins au SMIC revalorisé les pensions de carrière complète et au seuil de pauvreté le minimum vieillesse.",
      "Créer 10 000 places par an en EHPAD publics pendant cinq ans."
    ],
    "Le seuil de pension proposé pour une carrière complète concerne une situation différente du minimum vieillesse, qui relève d’un dispositif de solidarité. Le montant individuel dépendrait des règles d’application.",
    "Quel serait le coût et quand les pensions changeraient-elles ?",
    "Le programme prévoit notamment de supprimer les avantages fiscaux de la retraite par capitalisation. La trajectoire, le coût total et les règles transitoires sont à vérifier.",
    [
      [
        "Retraites et minimum vieillesse",
        "mettre-en-securite-sociale/chapitre1"
      ],
      [
        "Autonomie et EHPAD",
        "mettre-en-securite-sociale/chapitre2"
      ]
    ]
  ],
  [
    "sante",
    "Santé et services publics",
    "Hôpital, urgences, remboursements",
    "Pourrais-je me faire soigner près de chez moi ?",
    "30 min",
    "seuil de proximité visé pour les services cités",
    [
      "Rouvrir progressivement des urgences, des maternités et des EHPAD publics pour rapprocher ces services de la population.",
      "Rembourser à 100 % les soins prescrits et intégrer les complémentaires santé à la Sécurité sociale.",
      "Lancer un plan pluriannuel de recrutement dans les métiers du soin et du médico-social."
    ],
    "Début 2026, le rapport de la Sécurité sociale estime que 97 % de la population a accès à des soins de médecine d’urgence en moins de 30 minutes quand plusieurs types de structures sont comptés. Cet indicateur ne mesure ni l’accès aux maternités et aux EHPAD ni le temps d’attente sur place.",
    "Comment rouvrir des services quand les équipes manquent ?",
    "Il faudrait recruter, former et répartir les équipes dans les territoires. Le calendrier et les moyens locaux conditionneraient l’effet.",
    [
      [
        "Hôpital et proximité",
        "le-gout-du-futur-aux-nouvelles-frontieres-de-l-humanite/chapitre4"
      ],
      [
        "Remboursements",
        "mettre-en-securite-sociale/chapitre1"
      ],
      [
        "Accès aux urgences, rapport de la Sécurité sociale",
        "https://evaluation.securite-sociale.fr/home/maladie/263-population-ayant-acces-aux-s.html"
      ]
    ],
    [
      "Population à moins de 30 minutes, début 2026",
      [
        "Services d’urgence ou SMUR",
        95
      ],
      [
        "Toutes les options étudiées",
        97
      ],
      " %",
      100
    ]
  ],
  [
    "ecole",
    "École, jeunesse et culture",
    "Cantine, classes, autonomie",
    "Qu’est-ce qui changerait pour les familles ?",
    "18 ans",
    "âge jusqu’auquel la scolarité serait obligatoire",
    [
      "Rendre gratuits les fournitures, la cantine, le transport et les activités périscolaires dans l’éducation publique.",
      "Réduire les effectifs par classe en donnant la priorité à la maternelle et à l’éducation prioritaire.",
      "Créer une garantie d’autonomie pour les jeunes détachés du foyer fiscal parental, avec le seuil de pauvreté comme repère."
    ],
    "Pour une famille, la gratuité viserait aussi des dépenses qui entourent les cours, comme la cantine et les fournitures. À l’échelle d’une commune, elle suppose de financer le service et sa capacité d’accueil. Le volet culturel prévoit aussi d’étendre la gratuité à tous les musées et bibliothèques, et de consacrer 1 % du PIB par an aux arts, à la culture et à la création.",
    "Combien d’enseignants et de personnels faudrait-il ?",
    "Les besoins dépendent des classes à ouvrir, des effectifs existants et de l’organisation du périscolaire. Ils varieraient selon les territoires.",
    [
      [
        "Éducation",
        "le-gout-du-futur-aux-nouvelles-frontieres-de-l-humanite/chapitre2"
      ],
      [
        "Autonomie des jeunes",
        "mettre-en-securite-sociale/chapitre2"
      ],
      [
        "Culture et sport",
        "le-gout-du-futur-aux-nouvelles-frontieres-de-l-humanite/chapitre3"
      ]
    ]
  ],
  [
    "securite",
    "Sécurité et justice",
    "Trafics, police, victimes",
    "Que ferait-il contre les trafics ?",
    "×2",
    "pour les moyens de la police scientifique",
    [
      "Renforcer les effectifs spécialisés contre les trafics, la criminalité organisée et la délinquance financière.",
      "Rétablir la police de proximité et démanteler les BAC et les BRAV-M.",
      "Renforcer le recueil des plaintes et créer un service public d’accompagnement des victimes."
    ],
    "Après une infraction, le programme agit à plusieurs étapes. L’accueil et le dépôt de plainte mobiliseraient les services chargés de recevoir les victimes. Les moyens scientifiques et spécialisés serviraient aux enquêtes.",
    "Qui reprendrait les missions actuelles des brigades démantelées ?",
    "La répartition des missions, les effectifs, la formation et le calendrier de transition sont les éléments à vérifier pour juger la réforme.",
    [
      [
        "Police, justice et victimes",
        "fonder-la-6e-republique/chapitre2"
      ]
    ],
    [
      "Moyens de la police scientifique, indice illustratif",
      [
        "Base de départ",
        100
      ],
      [
        "Doublement proposé",
        200
      ],
      ""
    ]
  ],
  [
    "immigration",
    "Immigration, égalité et droits",
    "Séjour, asile, discriminations",
    "Quelles règles de séjour et d’accueil changeraient ?",
    "10 ans",
    "durée du titre de séjour proposé comme référence",
    [
      "Faciliter l’accès aux visas, faire de la carte de séjour de dix ans le titre de référence et créer un guichet unique d’accueil.",
      "Régulariser les travailleurs, les étudiants et les parents d’enfants scolarisés sans papiers.",
      "Remplacer les centres de rétention administrative par des dispositifs d’accompagnement juridique et d’hébergement ouvert."
    ],
    "Le droit au séjour et l’asile suivent des procédures différentes. Sur l’égalité de traitement, le programme propose aussi de généraliser le testing, par exemple en comparant les réponses à deux candidatures similaires afin de détecter une discrimination.",
    "Qui serait éligible et comment traiter les demandes ?",
    "Les pièces à fournir, les critères détaillés et les moyens des services détermineraient l’accès effectif et les délais.",
    [
      [
        "Politique migratoire",
        "un-monde-ordonne/chapitre3"
      ],
      [
        "Égalité et discriminations",
        "mettre-en-securite-sociale/chapitre4"
      ]
    ]
  ],
  [
    "climat",
    "Énergie, climat et agriculture",
    "Rénovation, renouvelables, revenus agricoles",
    "Comment le programme veut-il changer notre façon de produire et de nous chauffer ?",
    "700 000",
    "logements à isoler au moins chaque année",
    [
      "Planifier 100 % d’énergies renouvelables au plus tard en 2060 et la sortie des énergies fossiles avant 2050.",
      "Programmer la fermeture progressive des centrales nucléaires existantes et arrêter le programme EPR2.",
      "Instaurer des prix planchers pour garantir des prix rémunérateurs aux agriculteurs."
    ],
    "Un logement mieux isolé peut demander moins de chauffage. L’économie réelle dépend des travaux réalisés, du prix de l’énergie et de la température souhaitée.",
    "Comment assurer l’approvisionnement pendant le changement de mix énergétique ?",
    "La trajectoire dépend des nouvelles capacités, des réseaux, de la consommation et du rythme de fermeture des installations existantes.",
    [
      [
        "Énergie, rénovation et agriculture",
        "pour-une-bifurcation-ecologique-et-sociale/chapitre3"
      ]
    ]
  ],
  [
    "institutions",
    "Institutions, Europe et défense",
    "Constitution, participation, OTAN",
    "Quelles décisions la France prendrait-elle autrement ?",
    "VIᵉ République",
    "objectif de la procédure constituante",
    [
      "Engager par référendum un processus constituant pour élaborer une nouvelle Constitution et proposer un référendum d’initiative citoyenne.",
      "Chercher à suspendre les règles budgétaires européennes limitant le déficit à 3 % du PIB.",
      "Sortir immédiatement du commandement intégré de l’OTAN, puis quitter l’organisation par étapes."
    ],
    "La Constituante serait chargée de rédiger un nouveau texte. Le programme propose d’y inscrire des moyens d’intervention citoyenne. En politique étrangère, la sortie du commandement et la sortie de l’alliance sont deux étapes distinctes.",
    "Qu’est-ce qui dépendrait du Parlement, des électeurs ou des partenaires étrangers ?",
    "Les institutions dépendent du processus constituant. Les règles communes de l’Union et les relations de défense impliquent aussi des négociations ou des effets au-delà de la France.",
    [
      [
        "Constituante et initiatives citoyennes",
        "fonder-la-6e-republique/chapitre1"
      ],
      [
        "Union européenne",
        "un-monde-ordonne/chapitre1"
      ],
      [
        "Défense et OTAN",
        "un-monde-ordonne/chapitre2"
      ]
    ]
  ]
];
