/* ===== CHEMISTRY QUESTION BANK ===== */
const CHEMISTRY_TOPICS = [
{
  name: "1. Some Basic Concepts in Chemistry",
  qs: [
  {type:"pyq", year:"JEE Main 2020", q:"The number of moles of hydrogen gas needed to completely convert 1 mol of N₂ into NH₃ (N₂ + 3H₂ → 2NH₃) is:",
   options:["3 mol","1.5 mol","2 mol","6 mol"], answer:0,
   steps:["From the equation: 1 N₂ needs 3 H₂.",
    "So 1 mol N₂ → 3 mol H₂.",
    "Stoichiometry = mole ratio = coefficient ratio.",
    "Also produces 2 mol NH₃ (mole–mole conversion)."],
   ans:"3 mol (option A)", tip:"Always write the balanced equation first; every mole question is a ratio problem off it."},
  {type:"imp", q:"Number of atoms in 4.25 g of NH₃ is approximately:",
   options:["6.02 × 10²³","1.8 × 10²³","6.02 × 10²²","1.2 × 10²⁴"], answer:0,
   steps:["M(NH₃) = 17 g/mol → moles = 4.25/17 = 0.25.",
    "Molecules = 0.25 × 6.022 × 10²³ = 1.505 × 10²³.",
    "Atoms per molecule = 4 (1 N + 3 H).",
    "Total atoms = 4 × 1.505 × 10²³ ≈ 6.02 × 10²³."],
   ans:"≈ 6.02 × 10²³ (option A)", tip:"moles → molecules (×N_A) → atoms (× atoms per molecule). Two multiplications, no drama."},
  {type:"imp", q:"An oxide of metal M contains 40% oxygen by mass. If M = 48 g/mol (approx), its formula is:",
   options:["MO","M₂O₃","MO₂","M₂O"], answer:2,
   steps:["Take 100 g: O = 40 g → 2.5 mol O; M = 60 g → 60/48 = 1.25 mol.",
    "Ratio M : O = 1.25 : 2.5 = 1 : 2.",
    "Empirical formula = MO₂.",
    "Empirical formula = simplest whole-number ratio; molecular formula = n × empirical."],
   ans:"MO₂ (option C)", tip:"% → divide by atomic mass → divide by smallest → whole numbers. That's the entire empirical-formula algorithm."}
  ]
},
{
  name: "2. Atomic Structure",
  qs: [
  {type:"pyq", year:"JEE Main 2019", q:"The number of radial nodes in a 3p orbital is:",
   options:["1","0","2","3"], answer:0,
   steps:["Radial nodes = n − l − 1.",
    "For 3p: n = 3, l = 1 → 3 − 1 − 1 = 1.",
    "Angular nodes = l (here 1, the nodal plane).",
    "Total nodes = n − 1 = 2 ✓ (1 radial + 1 angular)."],
   ans:"1 (option A)", tip:"Radial = n−l−1, angular = l, total = n−1. Three formulas answer every node question."},
  {type:"imp", q:"The set of quantum numbers NOT possible for an electron is:",
   options:["n=3, l=2, m=−3","n=2, l=0, m=0","n=4, l=3, m=+3","n=3, l=1, m=−1"], answer:0,
   steps:["Rule: m ranges from −l to +l.",
    "For l = 2 (d), allowed m = −2…+2, so m = −3 is impossible.",
    "Others: (2,0,0) ✓ 2s; (4,3,3) ✓ 4f; (3,1,−1) ✓ 3p."],
   ans:"n=3, l=2, m=−3 (option A)", tip:"Check in order: l < n, |m| ≤ l, s = ±½. If any fails, the set is illegal."},
  {type:"imp", q:"The de Broglie wavelength of a particle is INDEPENDENT of:",
   options:["charge","mass","velocity","Planck's constant"], answer:0,
   steps:["λ = h/mv = h/p.",
    "Depends on mass and velocity (momentum), not on charge.",
    "A neutron and an electron with equal momentum have equal λ."],
   ans:"Charge (option A)", tip:"λ = h/p — matter wave depends only on momentum. Charge shows up in accelerating-potential versions (λ = 12.27/√V Å) only through v."}
  ]
},
{
  name: "3. Chemical Bonding & Molecular Structure",
  qs: [
  {type:"pyq", year:"JEE Main 2020", q:"The hybridisation and shape of SF₄ are:",
   options:["sp³d, see-saw","sp³, tetrahedral","sp³d², square planar","sp³d, trigonal bipyramidal"], answer:0,
   steps:["S has 6 valence electrons; 4 bond pairs + 1 lone pair = 5 electron domains.",
    "5 domains → sp³d.",
    "One equatorial position occupied by the lone pair → see-saw shape.",
    "Rule: hybridisation counts LONE PAIRS; shape ignores them."],
   ans:"sp³d, see-saw (option A)", tip:"Steric number = bonds + lone pairs → hybridisation (2=sp, 3=sp², 4=sp³, 5=sp³d, 6=sp³d²). Lone pairs bend shapes: TBP→see-saw, oct→sq. pyramidal."},
  {type:"imp", q:"Bond order of O₂⁻ (superoxide ion) according to MOT is:",
   options:["1.5","2","2.5","1"], answer:0,
   steps:["O₂⁻ has 17 electrons (O₂ has 16, plus 1).",
    "Bond order = (N_bonding − N_antibonding)/2.",
    "For O₂: BO = 2; adding one electron to π* lowers BO by ½.",
    "So BO(O₂⁻) = 1.5. (O₂⁺ = 2.5, O₂²⁻ = 1.)"],
   ans:"1.5 (option A)", tip:"Remember the ladder: O₂⁺ 2.5 > O₂ 2 > O₂⁻ 1.5 > O₂²⁻ 1. Bond order ↑ → stability ↑, bond length ↓."},
  {type:"imp", q:"Which molecule has ZERO dipole moment?",
   options:["CO₂","H₂O","NH₃","SO₂"], answer:0,
   steps:["CO₂ is linear (sp, 180°) — the two polar C=O bonds cancel exactly.",
    "H₂O (bent 104.5°), NH₃ (pyramidal), SO₂ (bent) are all polar.",
    "Symmetry (linear/trigonal planar/tetrahedral with identical bonds) ⇒ μ = 0."],
   ans:"CO₂ (option A)", tip:"Identical bonds + symmetric geometry → μ = 0. Bent or pyramidal → μ ≠ 0. Vector addition, not memorisation."}
  ]
}
,
{
  name: "4. Chemical Thermodynamics",
  qs: [
  {type:"pyq", year:"JEE Main 2021", q:"For a spontaneous process at constant T and P:",
   options:["ΔG < 0","ΔG > 0","ΔH < 0 always","ΔS(system) > 0 always"], answer:0,
   steps:["Spontaneity criterion: ΔG = ΔH − TΔS < 0.",
    "ΔH < 0 helps but isn't necessary (e.g., ice melting at 25°C: ΔH > 0 yet spontaneous).",
    "ΔS(system) can be negative if surroundings gain more entropy.",
    "Only ΔG < 0 is the universal condition."],
   ans:"ΔG < 0 (option A)", tip:"ΔG = ΔH − TΔS. Equilibrium: ΔG = 0. Temperature where spontaneity flips: T = ΔH/ΔS."},
  {type:"imp", q:"Hess's law is valid because enthalpy is a:",
   options:["state function","path function","extensive property only","function of temperature only"], answer:0,
   steps:["State function: depends only on initial & final states, not on the route.",
    "So total ΔH = sum of ΔH of any series of steps.",
    "Used to find ΔH of reactions that can't be measured directly (e.g., CO formation from C + ½O₂)."],
   ans:"State function (option A)", tip:"State functions (H, U, S, G): thermodynamic 'GPS' — route-free. q and w are path functions — that's why ΔU = q + w but ΔU itself is fixed."},
  {type:"imp", q:"For the reaction N₂ + 3H₂ → 2NH₃, the relation between ΔH and ΔU at 298 K is:",
   options:["ΔH = ΔU − 2RT","ΔH = ΔU + 2RT","ΔH = ΔU","ΔH = ΔU + RT"], answer:0,
   steps:["ΔH = ΔU + Δn_gas RT.",
    "Δn = 2 − (1+3) = −2.",
    "ΔH = ΔU − 2RT.",
    "Δn counts only gaseous species."],
   ans:"ΔH = ΔU − 2RT (option A)", tip:"Δn = moles gas products − reactants. Positive → ΔH > ΔU; negative → ΔH < ΔU. 10-second answer."}
  ]
},
{
  name: "5. Solutions",
  qs: [
  {type:"pyq", year:"JEE Main 2019", q:"Relative lowering of vapour pressure of a dilute solution is equal to:",
   options:["mole fraction of solute","mole fraction of solvent","molality","1/molarity"], answer:0,
   steps:["Raoult's law: (p° − p)/p° = x_solute.",
    "Valid strictly for ideal, dilute, non-volatile solute.",
    "This is a COLLIGATIVE property — depends on the number of particles, not their identity."],
   ans:"Mole fraction of solute (option A)", tip:"Colligative four: Δp, ΔTb (Kb·m), ΔTf (Kf·m), π (CRT). All ∝ particles dissolved — electrolytes multiply by van't Hoff factor i."},
  {type:"imp", q:"0.1 M each of glucose, NaCl, CaCl₂ and K₄[Fe(CN)₆] — highest osmotic pressure belongs to:",
   options:["K₄[Fe(CN)₆]","NaCl","CaCl₂","glucose"], answer:0,
   steps:["π = iCRT with same C and T → π ∝ i (van't Hoff factor).",
    "Glucose i=1; NaCl i=2; CaCl₂ i=3; K₄[Fe(CN)₆] i=5.",
    "Largest i → K₄[Fe(CN)₆]."],
   ans:"K₄[Fe(CN)₆] (option A)", tip:"Count total ions on dissociation: that's i. More ions → bigger colligative effect. (NaCl: 2, Al₂(SO₄)₃: 5.)"}
  ]
},
{
  name: "6. Equilibrium",
  qs: [
  {type:"pyq", year:"JEE Main 2020", q:"For the reaction N₂ + 3H₂ ⇌ 2NH₃, if Kc = 0.5 at some temperature, then Kc for 2NH₃ ⇌ N₂ + 3H₂ is:",
   options:["2","0.25","0.5","4"], answer:0,
   steps:["Reversing a reaction → K' = 1/K.",
    "K' = 1/0.5 = 2.",
    "Scaling by n → K^n; adding reactions → multiply K values."],
   ans:"2 (option A)", tip:"Reverse → invert. Double the equation → square. Halve → √. Combine reactions → multiply. Four rules handle ALL K-manipulation PYQs."},
  {type:"imp", q:"The pH of 0.001 M HCl solution is:",
   options:["3","2","11","1"], answer:0,
   steps:["Strong acid → fully dissociated: [H⁺] = 10⁻³ M.",
    "pH = −log[H⁺] = −log(10⁻³) = 3.",
    "Cross-check: pOH = 11 (since pH + pOH = 14)."],
   ans:"3 (option A)", tip:"Powers of 10: [H⁺] = 10⁻ⁿ → pH = n. For weak acids use [H⁺] = √(Ka·C). Never take pH of HCl as negative — strong acids are easy!"},
  {type:"imp", q:"According to Le Chatelier's principle, increasing pressure on N₂ + 3H₂ ⇌ 2NH₃ shifts equilibrium:",
   options:["towards NH₃ (fewer moles of gas)","towards reactants","no shift","depends on catalyst"], answer:0,
   steps:["4 mol gas (left) → 2 mol gas (right).",
    "Increased pressure → shift to the side with FEWER gas moles → forward.",
    "A catalyst changes only the RATE, never the position of equilibrium."],
   ans:"Towards NH₃ (option A)", tip:"'Squeeze to the smaller side.' Count gas moles only; solids/liquids don't count."}
  ]
}
,
{
  name: "7. Redox Reactions & Electrochemistry",
  qs: [
  {type:"pyq", year:"JEE Main 2020", q:"The oxidation number of chromium in K₂Cr₂O₇ is:",
   options:["+6","+3","+7","+2"], answer:0,
   steps:["K = +1 (×2), O = −2 (×7).",
    "2(+1) + 2x + 7(−2) = 0.",
    "2 + 2x − 14 = 0 → x = +6.",
    "In acidic medium Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O (6-electron change)."],
   ans:"+6 (option A)", tip:"Sum of oxidation numbers = charge of the species (0 for neutral). KMnO₄ → Mn is +7 by the same one-line algebra."},
  {type:"imp", q:"For the cell Zn | Zn²⁺ || Cu²⁺ | Cu (E°cell = 1.10 V), the reaction is spontaneous because:",
   options:["E°cell > 0","ΔG° > 0","K < 1","E°cell < 0"], answer:0,
   steps:["ΔG° = −nFE°cell.",
    "E°cell = 1.10 V > 0 → ΔG° < 0 → spontaneous.",
    "Also ΔG° = −RT lnK → positive E° means K > 1.",
    "Electrons flow Zn (anode, oxidation) → Cu (cathode, reduction)."],
   ans:"E°cell > 0 (option A)", tip:"Triangle: E° > 0 ⇔ ΔG° < 0 ⇔ K > 1. One sign links all three. AN OX / RED CAT (Anode oxidation, Reduction cathode)."},
  {type:"imp", q:"Mass of copper deposited by 2 faradays of charge from Cu²⁺ solution (at. mass 63.5) is:",
   options:["63.5 g","31.75 g","127 g","96500 g"], answer:0,
   steps:["Faraday's first law: w = (zIt)/F = (E×Q)/96500.",
    "Cu²⁺ + 2e⁻ → Cu → n-factor = 2 → E = 63.5/2 = 31.75.",
    "w = 31.75 × 2F/1F... w = E × (Q/F) = 31.75 × 2 = 63.5 g.",
    "1 Faraday deposits 1 equivalent (E grams)."],
   ans:"63.5 g (option A)", tip:"1 F deposits 'equivalent weight' grams. Equivalent weight = molar mass/n-factor (Ag 108, Cu 31.75, Al 9). Instant answers."}
  ]
},
{
  name: "8. Chemical Kinetics",
  qs: [
  {type:"pyq", year:"JEE Main 2021", q:"For a first-order reaction, the half-life is 20 min. The time for 75% completion is:",
   options:["40 min","60 min","20 min","80 min"], answer:0,
   steps:["75% completion → 25% left = (1/2)² of original → 2 half-lives.",
    "t = 2 × 20 = 40 min.",
    "First-order: t₁/₂ = 0.693/k, INDEPENDENT of initial concentration.",
    "For 87.5% → 3 half-lives, and so on."],
   ans:"40 min (option A)", tip:"% table: 50%→1t₁/₂, 75%→2, 87.5%→3, 93.75%→4. Zero-th order t₁/₂ = C₀/2k (depends on C₀) — the classic contrast question."},
  {type:"imp", q:"According to the Arrhenius equation, when temperature increases, the rate constant:",
   options:["increases (more molecules cross the activation barrier)","decreases","stays constant","becomes zero"], answer:0,
   steps:["k = A·e^(−Ea/RT).",
    "Higher T → larger e^(−Ea/RT) → larger k.",
    "Rule of thumb: rate roughly doubles for a 10°C rise (Ea-dependent).",
    "Slope of ln k vs 1/T = −Ea/R → used to find Ea."],
   ans:"Increases (option A)", tip:"ln(k₂/k₁) = Ea/R × (T₂−T₁)/(T₁T₂). One formula for all 'temperature raised, rate?' numericals."},
  {type:"imp", q:"For a reaction A → products with rate = k[A]², if [A] is doubled, the rate becomes:",
   options:["4 times","2 times","unchanged","half"], answer:0,
   steps:["Rate ∝ [A]^order = [A]².",
    "Doubling [A]: (2)² = 4 → rate × 4.",
    "General: change factor = (concentration factor)^order."],
   ans:"4 times (option A)", tip:"Rate ∝ (conc factor)^order. Order 0 → no change, 1 → ×2, 2 → ×4, 3 → ×8. Molecularity ≠ order (molecularity is theoretical, never fractional)."}
  ]
},
{
  name: "9. Classification of Elements & Periodicity",
  qs: [
  {type:"pyq", year:"JEE Main 2019", q:"The correct order of first ionisation enthalpy of N, O, F, Ne is:",
   options:["Ne > F > N > O","Ne > F > O > N","F > Ne > O > N","O > N > F > Ne"], answer:0,
   steps:["Across a period IE generally increases (Z_eff ↑, size ↓): N < O < F < Ne — BUT with an anomaly.",
    "N has a stable half-filled 2p³ configuration → harder to remove an electron than O.",
    "So N swaps above O: Ne > F > N > O.",
    "Same logic makes Be > B."],
   ans:"Ne > F > N > O (option A)", tip:"IE anomalies to memorise: Be > B and N > O (filled/half-filled stability beats the general trend). Every periodic-table PYQ tests one of these."},
  {type:"imp", q:"Atomic radius order for Na, Mg, Al is:",
   options:["Na > Mg > Al","Al > Mg > Na","Mg > Na > Al","Na > Al > Mg"], answer:0,
   steps:["Across period 3: nuclear charge increases, shells stay the same → size shrinks.",
    "Na (1s²…) > Mg > Al.",
    "Down a group size increases: Li < Na < K.",
    "Ionic radii: cations < parent atom; anions > parent atom."],
   ans:"Na > Mg > Al (option A)", tip:"Left → right: shrink. Top → bottom: grow. Isoelectronic series: more protons → smaller ion (Al³⁺ < Mg²⁺ < Na⁺ < F⁻ < O²⁻)."}
  ]
}
,
{
  name: "10. p-Block Elements",
  qs: [
  {type:"imp", q:"Which boron halide is the strongest Lewis acid?",
   options:["BI₃","BF₃","BCl₃","BBr₃"], answer:0,
   steps:["Electron deficiency of B makes them Lewis acids, BUT back-bonding matters:",
    "F is small → strong 2pπ–2pπ back-bonding with B reduces electron deficiency → BF₃ weakest.",
    "Back-bonding weakens down the group: BF₃ < BCl₃ < BBr₃ < BI₃ in acid strength.",
    "So BI₃ is the strongest Lewis acid."],
   ans:"BI₃ (option A)", tip:"pπ–pπ back-bonding: strongest for small atoms (B–F). Down the group, acid strength increases."},
  {type:"imp", q:"The reason HF is a weak acid compared to HCl is:",
   options:["strong H–F bond and hydrogen bonding","F is less electronegative","HF is not polar","H is heavier in HCl"], answer:0,
   steps:["Acid strength of halides: HF < HCl < HBr < HI (down the group).",
    "H–F bond is strongest (small size, high bond dissociation energy) → least willing to donate H⁺.",
    "Also HF forms strong H-bonds, further suppressing dissociation.",
    "HI is strongest — weak H–I bond wins."],
   ans:"Strong H–F bond + H-bonding (option A)", tip:"Two rival trends: bond strength (down = weaker bond = stronger acid) vs oxyacids (more O → stronger acid)."},
  {type:"imp", q:"Noble gases form compounds MOST readily with:",
   options:["Xe with F and O","He with F","Ne with O","Kr with H"], answer:0,
   steps:["Ionisation energy decreases down group 18 → reactivity increases: Xe > Kr > Rn.",
    "XeF₂, XeF₄, XeF₆, XeO₃ exist; XeF₄ is square planar (sp³d², 2 lone pairs).",
    "He and Ne form no stable compounds.",
    "First noble-gas compound made: XePtF₆ (Bartlett, 1962)."],
   ans:"Xe with fluorine and oxygen (option A)", tip:"Only HEAVIER noble gases react, only with the most electronegative elements (F, O). XeF₄ = square planar, XeF₂ = linear."}
  ]
},
{
  name: "11. d- and f-Block Elements",
  qs: [
  {type:"pyq", year:"JEE Main 2021", q:"The transition metal showing the highest oxidation state in its common compounds is:",
   options:["Mn (+7 in MnO₄⁻)","Fe (+3)","Cu (+2)","Zn (+2)"], answer:0,
   steps:["Mn shows oxidation states +2 to +7 (3d⁵4s² — maximum unpaired d-electrons).",
    "MnO₄⁻ has Mn in +7 (purple, strong oxidant).",
    "Zn (+2) is NOT a transition element by strict definition (3d¹⁰, fully filled).",
    "Cu lacks a +4 state; Fe goes beyond +3 only rarely."],
   ans:"Mn, +7 in KMnO₄ (option A)", tip:"Maximum unpaired d-electrons (d⁵) → maximum oxidation states (Mn: +2→+7). Zn, Cd, Hg are 'transition-like' but d¹⁰."},
  {type:"imp", q:"The colour of K₂Cr₂O₇ solution and the oxidation state of Cr are:",
   options:["orange, +6","purple, +7","green, +3","yellow, +6"], answer:0,
   steps:["Dichromate Cr₂O₇²⁻: orange, Cr = +6.",
    "KMnO₄: purple, Mn = +7.",
    "Both are strong oxidants in acidic medium; Cr₂O₇²⁻ → Cr³⁺ (green).",
    "Colour arises from d–d transitions (unpaired d-electrons)."],
   ans:"Orange, +6 (option A)", tip:"Colour trio: MnO₄⁻ purple, Cr₂O₇²⁻ orange, Cu²⁺ blue, Ni²⁺ green, Co²⁺ pink. Zn²⁺ is colourless (no unpaired d)."},
  {type:"imp", q:"Lanthanoid contraction is due to:",
   options:["poor shielding by 4f electrons","increasing atomic size","strong 5f shielding","relativistic expansion"], answer:0,
   steps:["4f electrons shield the nuclear charge poorly (diffuse f-shape).",
    "So Z_eff keeps rising across the series → size steadily decreases La → Lu.",
    "Consequences: Zr ≈ Hf size (similar chemistry), Y behaves like heavy lanthanoids.",
    "Also makes 5d elements slightly smaller than expected."],
   ans:"Poor shielding by 4f electrons (option A)", tip:"Lanthanoid contraction explains the Zr/Hf 'twins' and why 4d/5d radii are similar."}
  ]
}
,
{
  name: "12. Coordination Compounds",
  qs: [
  {type:"pyq", year:"JEE Main 2020", q:"The IUPAC name of [Co(NH₃)₆]Cl₃ is:",
   options:["hexaamminecobalt(III) chloride","cobalt hexaammine trichloride","hexaamminecobaltate(III) chloride","trichlorohexaamminecobalt(III)"], answer:0,
   steps:["Ligands first (alphabetical), then metal + oxidation state, then counter-ion.",
    "6 NH₃ → hexaammine; the complex is a cation → metal named normally; Cl₃ outside → chloride.",
    "Charge balance: 3 Cl⁻ → complex charge +3 → Co = +3 → cobalt(III).",
    "If the complex were an ANION, the metal name ends in '-ate' (e.g., ferrate, cobaltate)."],
   ans:"hexaamminecobalt(III) chloride (option A)", tip:"Name = ligands (alphabetical) + metal(oxidation state) + anion. Always find the metal's OS by charge balance, never guess."},
  {type:"imp", q:"[Co(NH₃)₄Cl₂]⁺ exhibits which type of isomerism?",
   options:["geometrical (cis & trans)","linkage only","ionisation only","no isomerism"], answer:0,
   steps:["Octahedral MA₄B₂ → cis (same side) and trans (opposite) geometrical isomers.",
    "cis-[Co(NH₃)₄Cl₂]⁺ and trans-[Co(NH₃)₄Cl₂]⁺ have different colours/polarities.",
    "Linkage isomerism needs ambidentate ligands (NO₂⁻: nitro vs nitrito; SCN⁻).",
    "Optical isomerism is classic for [Co(en)₃]³⁺ (Δ and Λ forms)."],
   ans:"Geometrical (cis/trans) (option A)", tip:"Isomerism map: MA₄B₂ → cis/trans; MA₃B₃ → fac/mer; ambidentate ligand → linkage; chelate complexes → optical (Δ/Λ)."},
  {type:"imp", q:"[Fe(CN)₆]⁴⁻ is diamagnetic while [Fe(H₂O)₆]²⁺ is paramagnetic because:",
   options:["CN⁻ is a strong-field ligand (causes pairing); H₂O is weak-field","Fe has different oxidation states","CN⁻ is larger","H₂O is charged"], answer:0,
   steps:["Fe is +2 in BOTH (d⁶ configuration).",
    "Strong-field CN⁻ → large Δ₀ → electrons pair → low spin, t₂g⁶ → diamagnetic.",
    "Weak-field H₂O → small Δ₀ → high spin, t₂g⁴ eg² → 4 unpaired → paramagnetic.",
    "Crystal Field Theory + spectrochemical series decide everything."],
   ans:"Ligand field strength (option A)", tip:"Series (weak→strong): I⁻ < Br⁻ < Cl⁻ < F⁻ < H₂O < NH₃ < en < CN⁻ ≈ CO. Strong field → low spin → paired → less paramagnetism."}
  ]
}
,
{
  name: "13. Purification & Characterisation of Organic Compounds",
  qs: [
  {type:"imp", q:"A liquid immiscible with water and differing widely in boiling point is best purified by:",
   options:["steam distillation","simple distillation","fractional distillation","sublimation"], answer:0,
   steps:["Steam distillation → for liquids immiscible with water (e.g., aniline, essential oils).",
    "Fractional distillation → liquids with CLOSE boiling points (petroleum fractions).",
    "Simple distillation → liquids with large Δbp, both pure components volatile.",
    "Sublimation → solids like camphor, naphthalene, benzoic acid."],
   ans:"Steam distillation (option A)", tip:"Match method to property: Δbp small → fractional; immiscible with water → steam; solid that vaporises → sublimation; crystallisation → purity of solids."},
  {type:"pyq", year:"JEE Main 2019", q:"In Carius method, the amount of sulfur in an organic compound is estimated by converting it to:",
   options:["BaSO₄","SO₂ gas","H₂S","Na₂SO₄ only"], answer:0,
   steps:["Carius: compound heated with fuming HNO₃ → S oxidised to H₂SO₄.",
    "Then treated with BaCl₂ → BaSO₄ precipitate (weighed).",
    "%S = (32/233) × (mass of BaSO₄/mass of compound) × 100.",
    "Similarly halogens → AgX; P → Mg₂P₂O₇."],
   ans:"BaSO₄ (option A)", tip:"Carius products to remember: S → BaSO₄, X → AgX, P → Mg₂P₂O₇. Formulas: %S = 32/233 × mass ratio × 100."}
  ]
},
{
  name: "14. Some Basic Principles of Organic Chemistry (GOC)",
  qs: [
  {type:"pyq", year:"JEE Main 2021", q:"The most stable carbocation among the following is:",
   options:["(CH₃)₃C⁺","CH₃CH₂⁺","CH₃⁺","CH₂=CH⁺"], answer:0,
   steps:["Stability: 3° > 2° > 1° > CH₃⁺ (hyperconjugation + inductive donation).",
    "t-Butyl cation has 9 hyperconjugative α-hydrogens.",
    "Vinyl cation (CH₂=CH⁺) is least stable — positive charge on sp carbon.",
    "Order with resonance: benzylic/allylic 3° > … > vinyl."],
   ans:"(CH₃)₃C⁺ (option A)", tip:"Stability ladder: resonance/aryl > 3° > 2° > 1° > methyl > vinyl. More α-H = more hyperconjugation = more stability."},
  {type:"imp", q:"Which effect explains the increased acidity of chloroacetic acid over acetic acid?",
   options:["−I effect of Cl","+I effect of Cl","hyperconjugation","resonance of Cl"], answer:0,
   steps:["Cl withdraws electron density inductively (−I).",
    "This stabilises the carboxylate anion (spreads negative charge).",
    "More stable conjugate base → stronger acid.",
    "More Cl atoms → even stronger acid (CCl₃COOH > CHCl₂COOH > CH₂ClCOOH > CH₃COOH)."],
   ans:"−I (inductive) effect (option A)", tip:"EW groups (−I, −M) → stabilise anions → ↑ acidity, ↓ basicity. ED groups (+I, +M) do the opposite. Inductive dies over 3 carbons; resonance travels."},
  {type:"imp", q:"Number of structural isomers of C₄H₁₀O (alcohols only) is:",
   options:["4","3","5","7"], answer:0,
   steps:["C₄H₁₀O alcohols: n-butanol, sec-butanol, isobutanol, tert-butanol.",
    "Chain variation (butyl skeletons: n- and iso-) × OH position.",
    "n-butyl + sec-butyl (from n-butane) and isobutyl + tert-butyl (from isobutane) = 4.",
    "Ethers would add 3 more (total 7)."],
   ans:"4 (option A)", tip:"Count isomers systematically: fix the carbon skeleton, then place the functional group on non-equivalent positions. Draw, don't guess."}
  ]
},
{
  name: "15. Hydrocarbons",
  qs: [
  {type:"pyq", year:"JEE Main 2020", q:"Propene reacts with HBr to give 2-bromopropane (major). This follows:",
   options:["Markovnikov's rule (via more stable 2° carbocation)","anti-Markovnikov rule","free radical mechanism","syn addition"], answer:0,
   steps:["Markovnikov: H adds to the C with MORE hydrogens; X to the more substituted C.",
    "Mechanism: protonation gives the more stable carbocation (2° here).",
    "Br⁻ then attacks → 2-bromopropane.",
    "With PEROXIDES, HBr follows anti-Markovnikov (free-radical, Kharasch effect) — HBr only!"],
   ans:"Markovnikov's rule (option A)", tip:"'Rich get richer': H goes to the H-rich carbon. Peroxide effect = anti-Markovnikov, valid ONLY for HBr."},
  {type:"imp", q:"Benzene undergoes electrophilic substitution rather than addition because:",
   options:["substitution preserves the aromatic 6π stabilisation","addition is faster","π bonds are weak","sp² carbons repel electrophiles"], answer:0,
   steps:["Benzene's resonance energy ≈ 152 kJ/mol.",
    "Addition would destroy aromaticity (loses stabilisation).",
    "Substitution (EAS: nitration, halogenation, sulphonation, FC alkylation/acylation) keeps the aromatic ring intact.",
    "Hückel's rule: planar, cyclic, (4n+2)π → aromatic."],
   ans:"To preserve aromaticity (option A)", tip:"Aromaticity is the 'safety deposit' — reactions only proceed if the ring stays aromatic. Hence EAS, never easy addition."},
  {type:"imp", q:"Terminal alkynes (like ethyne) are weakly acidic because:",
   options:["the C–H bond involves sp carbon (high s-character, stable anion)","H is loosely held by π electrons","triple bond breaks easily","they are hydrocarbons"], answer:0,
   steps:["sp carbon = 50% s-character → holds electrons close → C–H is polarised.",
    "Acetylide anion (C≡C⁻) is relatively stable on sp carbon.",
    "React with Na metal / AgNO₃ (ammoniacal) → forms acetylides (test for terminal ≡C–H).",
    "Acidity order: sp > sp² > sp³ C–H."],
   ans:"sp hybridisation stabilises the anion (option A)", tip:"More s-character → more acidic. pKa: alkyne ≈ 25, alkene ≈ 44, alkane ≈ 50. Ammoniacal AgNO₃/CuCl tests terminal alkynes."}
  ]
}
,
{
  name: "16. Organic Compounds Containing Halogens",
  qs: [
  {type:"pyq", year:"JEE Main 2019", q:"2-Bromo-2-methylbutane undergoes hydrolysis fastest via:",
   options:["SN1 (stable 3° carbocation)","SN2 (least steric hindrance)","E2 always","radical substitution"], answer:0,
   steps:["Tertiary halide → SN2 is blocked by steric hindrance.",
    "SN1: ionisation gives a stable 3° carbocation → fast.",
    "SN1 rate ∝ [R–X] only (unimolecular); product may be racemised (planar cation).",
    "SN2 favoured by 1° halides, strong nucleophile, polar aprotic solvent (rate ∝ [RX][Nu])."],
   ans:"SN1 (option A)", tip:"3° → SN1, 1° → SN2, 2° → both. Weak nucleophile/polar protic → SN1; strong nucleophile/polar aprotic → SN2."},
  {type:"imp", q:"Grignard reagent CH₃MgBr is prepared in:",
   options:["dry ether (any moisture destroys it)","water","ethanol","dilute acid"], answer:0,
   steps:["R–Mg–X is destroyed by water/alcohols (protonated → R–H).",
    "Needs perfectly dry ether (coordinates & stabilises the reagent).",
    "Grignard + CO₂ → carboxylic acid; + HCHO → 1° alcohol; + aldehyde → 2° alcohol; + ketone → 3° alcohol."],
   ans:"Dry ether (option A)", tip:"Grignard = carbon nucleophile (C⁻ equivalent). Water kills it. Carbonyl + Grignard: HCHO→1°, RCHO→2°, R₂CO→3° alcohol."}
  ]
},
{
  name: "17. Organic Compounds Containing Oxygen",
  qs: [
  {type:"pyq", year:"JEE Main 2021", q:"Aldehydes are more reactive than ketones towards nucleophilic addition because:",
   options:["less steric hindrance + fewer +I alkyl groups","ketones are more polar","aldehydes are lighter","H is a better leaving group"], answer:0,
   steps:["Two factors: steric (ketones have 2 bulky groups) and electronic (alkyl +I groups reduce C δ+).",
    "HCHO > RCHO > RCOR' in reactivity.",
    "Nucleophilic addition: HCN, NaHSO₃, Grignard, ammonia derivatives.",
    "Aromatic aldehydes (benzaldehyde) are less reactive than aliphatic — resonance stabilisation."],
   ans:"Less steric + less +I donation (option A)", tip:"Carbonyl reactivity = δ+ on carbon. More alkyls = less δ+ = slower. Order: HCHO > RCHO > ArCHO > ketones."},
  {type:"imp", q:"Phenol is more acidic than ethanol because:",
   options:["the phenoxide ion is resonance-stabilised; ethoxide is not","phenol is aromatic","ethanol has more carbons","OH in phenol is ionic"], answer:0,
   steps:["Phenoxide: negative charge delocalised over the ring (several resonance structures).",
    "Ethoxide: charge stuck on one oxygen.",
    "Stable conjugate base → stronger acid (phenol pKa ≈ 10 vs ethanol ≈ 16).",
    "EW groups on the ring (nitrophenol) push acidity even higher."],
   ans:"Resonance stabilisation of phenoxide (option A)", tip:"Acidity: carboxylic acid > phenol > water > alcohol. Ring substituents tune it: −NO₂ ↑ acid, −CH₃ ↓ acid."},
  {type:"imp", q:"Which compound gives a positive iodoform test?",
   options:["acetone (CH₃COCH₃)","benzaldehyde","methanol","formaldehyde"], answer:0,
   steps:["Iodoform test needs a CH₃–CO– group (or CH₃–CH(OH)– oxidisable to it).",
    "Acetone ✓, acetaldehyde ✓, ethanol ✓ (oxidised to acetaldehyde), 2-propanol ✓.",
    "Benzaldehyde ✗, methanol ✗, HCHO ✗.",
    "Yellow precipitate of CHI₃ confirms."],
   ans:"Acetone (option A)", tip:"Iodoform = 'methyl ketone detector'. Tollen's: aldehyde ✓ silver mirror, ketone ✗. Fehling: aliphatic aldehyde ✓."}
  ]
}
,
{
  name: "18. Organic Compounds Containing Nitrogen",
  qs: [
  {type:"pyq", year:"JEE Main 2020", q:"The correct order of basic strength of methylamines in aqueous solution is:",
   options:["(CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃","(CH₃)₃N > (CH₃)₂NH > CH₃NH₂ > NH₃","NH₃ > CH₃NH₂ > (CH₃)₂NH","CH₃NH₂ > (CH₃)₂NH > (CH₃)₃N > NH₃"], answer:0,
   steps:["Gas phase: 3° > 2° > 1° > NH₃ (pure +I effect).",
    "In WATER: solvation of the ammonium ion competes with +I effect.",
    "Result: (CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃ (for methylamines).",
    "Arylamines (aniline) are far weaker bases — the lone pair delocalises into the ring."],
   ans:"(CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃ (option A)", tip:"Two competing effects: +I (donation) vs solvation (stabilisation of the cation) → 2° wins in water. Aniline << ammonia (resonance drain)."},
  {type:"imp", q:"Aniline + NaNO₂/HCl at 0–5°C gives a diazonium salt. Its KEY synthetic use is:",
   options:["route to dyes, phenols, halobenzenes (Sandmeyer)","making alcohols directly","polymerisation","as a drying agent"], answer:0,
   steps:["ArN₂⁺Cl⁻ (benzenediazonium chloride) is the most versatile intermediate in organic chemistry.",
    "CuCl/CuBr → chloro/bromobenzene (Sandmeyer); KI → iodobenzene; warm water → phenol.",
    "Couples with phenol/aniline → azo dyes (orange-red).",
    "Must be kept COLD — diazonium salts decompose above 5°C."],
   ans:"Versatile intermediate for dyes & substitutions (option A)", tip:"Diazo = 'switchboard': swap N₂⁺ for Cl, Br, I, CN, OH, H, F (Balz–Schiemann). One reagent set, ten products."}
  ]
},
{
  name: "19. Biomolecules",
  qs: [
  {type:"pyq", year:"JEE Main 2019", q:"Glucose and fructose differ in that fructose is a:",
   options:["ketose (ketone carbonyl); glucose is an aldose","aldose like glucose","pentose","disaccharide"], answer:0,
   steps:["Glucose: aldohexose (–CHO at C1). Fructose: ketohexose (C=O at C2).",
    "Both C₆H₁₂O₆, both reducing sugars, both give the same osazone.",
    "Tollens/Fehling positive for both (enediol tautomerism under basic conditions)."],
   ans:"Ketose (option A)", tip:"Aldose = terminal C=O (–CHO); ketose = internal C=O. Reducing sugars have a free anomeric carbon — sucrose is the famous NON-reducing exception."},
  {type:"imp", q:"The α-helix structure of proteins is stabilised mainly by:",
   options:["intramolecular hydrogen bonds (N–H···C=O)","disulfide bridges only","peptide bond breakage","ionic salts"], answer:0,
   steps:["Secondary structure (α-helix, β-sheet) = H-bonding between peptide N–H and C=O groups.",
    "Tertiary structure = overall folding: H-bonds, disulfide (S–S), ionic, hydrophobic interactions.",
    "Denaturation (heat, acid) destroys secondary/tertiary but NOT primary structure.",
    "Amino acids are joined by peptide (amide) bonds; ~20 standard ones, 9 essential."],
   ans:"Intramolecular H-bonds (option A)", tip:"Structure ladder: 1° = peptide bonds, 2° = H-bonds (helix/sheet), 3° = full folding, 4° = subunit assembly. DNA pairing is also H-bonds (A=T ×2, G≡C ×3)."},
  {type:"imp", q:"Vitamin C deficiency causes scurvy. Vitamin C is:",
   options:["water-soluble","fat-soluble","a hormone","an enzyme"], answer:0,
   steps:["Water-soluble vitamins: B-complex and C (not stored, need regular intake).",
    "Fat-soluble: A, D, E, K (stored in liver/adipose — excess can be toxic).",
    "D → rickets; A → night blindness; B1 → beriberi; B3 → pellagra; K → clotting issues."],
   ans:"Water-soluble (option A)", tip:"'ADEK' = fat-soluble, the rest are water-soluble. Vitamins are NOT enzymes or hormones — they act as coenzyme precursors."}
  ]
},
{
  name: "20. Principles Related to Practical Chemistry",
  qs: [
  {type:"pyq", year:"JEE Main 2021", q:"In a salt analysis, the confirmatory test for Fe³⁺ ion is:",
   options:["blood-red colouration with KSCN (or Prussian blue with K₄[Fe(CN)₆])","brown precipitate with NaOH only","white ppt with BaCl₂","green flame"], answer:0,
   steps:["Fe³⁺ + SCN⁻ → [Fe(SCN)]²⁺ blood-red complex.",
    "Fe³⁺ + K₄[Fe(CN)₆] → Prussian blue Fe₄[Fe(CN)₆]₃.",
    "NaOH gives reddish-brown Fe(OH)₃ (preliminary, not confirmatory).",
    "BaCl₂ test is for SO₄²⁻; green flame for borate."],
   ans:"Blood red with KSCN (option A)", tip:"Confirmatory tests: Fe³⁺ (KSCN red / Prussian blue), Ni²⁺ (DMG pink), PO₄³⁻ (ammonium molybdate yellow), Pb²⁺ (yellow PbI₂)."},
  {type:"imp", q:"In Lassaigne's test, nitrogen in an organic compound is first converted to:",
   options:["sodium cyanide (NaCN) during sodium fusion","sodium nitrate","ammonia gas","sodium nitrite"], answer:0,
   steps:["Fusion with Na converts organic N → NaCN in the extract.",
    "Extract + FeSO₄ + heat → Na₄[Fe(CN)₆] (sodium ferrocyanide).",
    "Then Fe³⁺ added → Prussian blue = positive for N.",
    "S → Na₂S (violet with sodium nitroprusside); X → NaX (AgX ppt with AgNO₃)."],
   ans:"NaCN (sodium cyanide) (option A)", tip:"Lassaigne converts covalent elements into IONIC sodium salts: N→CN⁻, S→S²⁻, X→X⁻. Then ordinary inorganic tests work."}
  ]
}
];







