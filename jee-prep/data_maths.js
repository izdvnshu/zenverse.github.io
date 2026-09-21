/* ===== MATHS QUESTION BANK ===== */
const MATHS_TOPICS = [
{
  name: "1. Sets, Relations & Functions",
  qs: [
  {type:"pyq", year:"JEE Main 2020", q:"If a set A has 5 elements, the number of SUBSETS of A is:",
   options:["32","25","10","120"], answer:0,
   steps:["Number of subsets = 2ⁿ (each element is in or out).",
    "2⁵ = 32.",
    "Proper subsets = 2ⁿ − 1 = 31; non-empty = 2ⁿ − 1; non-empty proper = 2ⁿ − 2 = 30."],
   ans:"32 (option A)", tip:"Subsets 2ⁿ, relations n², functions from A to B = |B|^|A| = 5⁵. Know these three power formulas cold."},
  {type:"imp", q:"The function f: R → R, f(x) = 2x + 3 is:",
   options:["bijective (one-one and onto)","one-one but not onto","onto but not one-one","neither"], answer:0,
   steps:["One-one: f(a) = f(b) → 2a+3 = 2b+3 → a = b ✓",
    "Onto: for any y, x = (y−3)/2 is real and f(x) = y ✓",
    "Linear functions with non-zero slope are always bijective R→R.",
    "Inverse: f⁻¹(y) = (y−3)/2."],
   ans:"Bijective (option A)", tip:"Any linear f(x) = ax+b (a≠0) from R to R is bijective. Quadratics are NOT one-one (fail horizontal line test)."}
  ]
},
{
  name: "2. Complex Numbers & Quadratic Equations",
  qs: [
  {type:"pyq", year:"JEE Main 2021", q:"If z = 1 + i, then |z| and arg(z) are:",
   options:["√2 and 45°","2 and 45°","√2 and 30°","1 and 45°"], answer:0,
   steps:["|z| = √(a² + b²) = √(1+1) = √2.",
    "arg(z) = tan⁻¹(b/a) = tan⁻¹(1) = 45° (π/4).",
    "Polar form: z = √2(cos45° + i sin45°).",
    "Always check the quadrant before quoting an argument."],
   ans:"√2, 45° (option A)", tip:"|z| = √(a²+b²), θ = tan⁻¹(b/a). Powers via De Moivre: (1+i)ⁿ = 2^(n/2)(cos nπ/4 + i sin nπ/4)."},
  {type:"imp", q:"If α and β are roots of x² − 5x + 6 = 0, then α + β and αβ are:",
   options:["5 and 6","−5 and 6","5 and −6","−5 and −6"], answer:0,
   steps:["For ax² + bx + c = 0: sum = −b/a, product = c/a.",
    "Sum = 5/1 = 5; product = 6/1 = 6.",
    "Roots check: 2 and 3 → 2+3 = 5, 2·3 = 6 ✓",
    "Useful extras: α² + β² = (α+β)² − 2αβ = 25 − 12 = 13."],
   ans:"5 and 6 (option A)", tip:"Never solve the quadratic — read coefficients. Sum = −b/a, product = c/a. Symmetric expressions (α²+β², 1/α+1/β) all come from these two."},
  {type:"imp", q:"If ω is a cube root of unity, then 1 + ω + ω² =",
   options:["0","1","3","ω"], answer:0,
   steps:["Roots of x³ = 1 are 1, ω, ω² with ω = (−1+i√3)/2.",
    "They are roots of x³ − 1 = (x−1)(x² + x + 1) → ω, ω² satisfy x² + x + 1 = 0.",
    "So 1 + ω + ω² = 0.",
    "Also ω³ = 1, ω^n depends on n mod 3."],
   ans:"0 (option A)", tip:"ω³ = 1 and 1 + ω + ω² = 0. Reduce exponents mod 3, use ω·ω² = 1. Every cube-root-of-unity PYQ uses just these two facts."}
  ]
},
{
  name: "3. Matrices & Determinants",
  qs: [
  {type:"pyq", year:"JEE Main 2020", q:"If A = [2 3; 1 4], then det(A) is:",
   options:["5","8","11","−5"], answer:0,
   steps:["det = ad − bc = (2)(4) − (3)(1).",
    "= 8 − 3 = 5.",
    "For 3×3, expand along the row with the most zeros."],
   ans:"5 (option A)", tip:"2×2: ad − bc. Inverse exists ⇔ det ≠ 0. A⁻¹ = adj(A)/det(A) — a 2×2 inverse is [d −b; −c a]/det."},
  {type:"imp", q:"The system x + y = 3, 2x + 2y = 6 has:",
   options:["infinitely many solutions (consistent, dependent)","unique solution","no solution","only x=3"], answer:0,
   steps:["Second equation is 2× the first → same line.",
    "det of coefficient matrix = 1·2 − 2·1 = 0 → not unique.",
    "Equations consistent (ratios of ALL coefficients equal 1:2 = 1:2) → infinitely many.",
    "If ratios matched for a,b but not c → NO solution."],
   ans:"Infinitely many (option A)", tip:"Compare a₁/a₂, b₁/b₂, c₁/c₂: all equal → infinite; first two equal but third different → none; det ≠ 0 → unique."}
  ]
},
{
  name: "4. Permutations & Combinations",
  qs: [
  {type:"pyq", year:"JEE Main 2021", q:"The number of ways to arrange the letters of 'BANANA' is:",
   options:["60","720","120","360"], answer:0,
   steps:["6 letters with repeats: B×1, A×3, N×2.",
    "n = 6!/(3!·2!·1!) = 720/12.",
    "= 60."],
   ans:"60 (option A)", tip:"Repeats → divide factorial by the factorials of each repeat count. Formula: n!/(p!q!r!…)."},
  {type:"imp", q:"From 7 men and 5 women, a committee of 3 men and 2 women is formed. Number of ways =",
   options:["350","210","252","21"], answer:0,
   steps:["Choose 3 men: C(7,3) = 35.",
    "Choose 2 women: C(5,2) = 10.",
    "Multiply (independent choices): 35 × 10 = 350."],
   ans:"350 (option A)", tip:"AND → multiply, OR → add. C(n,r) = n!/(r!(n−r)!). Memorise C(5,2)=10, C(7,3)=35, C(10,4)=210."},
  {type:"imp", q:"The number of ways 5 people can be seated around a circular table is:",
   options:["24","120","25","60"], answer:0,
   steps:["Circular arrangements: (n−1)!",
    "(5−1)! = 4! = 24.",
    "If clockwise/anticlockwise are identical (necklaces): divide by 2 → 12."],
   ans:"24 (option A)", tip:"Linear n!, circular (n−1)!, necklace (n−1)!/2. Fix one person to kill rotational duplicates."}
  ]
},
{
  name: "5. Binomial Theorem",
  qs: [
  {type:"pyq", year:"JEE Main 2020", q:"The coefficient of x² in the expansion of (1 + x)⁵ is:",
   options:["10","5","20","15"], answer:0,
   steps:["General term: T(r+1) = C(5,r)·xʳ.",
    "Coefficient of x² → r = 2 → C(5,2) = 10.",
    "Middle term (n = 5) is T₃ = C(5,2)x² = 10x²."],
   ans:"10 (option A)", tip:"Coefficient of xʳ in (1+x)ⁿ = C(n,r). Middle term: n odd → two middle terms; n even → one."},
  {type:"imp", q:"The number of terms in the expansion of (x + y)¹⁵ is:",
   options:["16","15","14","8"], answer:0,
   steps:["Number of terms = n + 1 = 16.",
    "Middle term = (n/2 + 1)th = 8th (when n even).",
    "Sum of binomial coefficients = 2ⁿ = 32768; alternating sum = 0."],
   ans:"16 (option A)", tip:"Terms = n+1. Σ C(n,r) = 2ⁿ; Σ(−1)ʳC(n,r) = 0; odd-index coefficients sum = even-index = 2^(n−1)."}
  ]
}
,
{
  name: "6. Sequences & Series",
  qs: [
  {type:"pyq", year:"JEE Main 2021", q:"The sum of the first 20 natural numbers is:",
   options:["210","200","190","400"], answer:0,
   steps:["S = n(n+1)/2 = 20 × 21/2.",
    "= 210.",
    "Sum of squares: n(n+1)(2n+1)/6; sum of cubes: [n(n+1)/2]²."],
   ans:"210 (option A)", tip:"Σn = n(n+1)/2, Σn² = n(n+1)(2n+1)/6, Σn³ = (Σn)². Also AP sum = n/2(a + l)."},
  {type:"imp", q:"In an AP, a = 3 and d = 4. The 10th term is:",
   options:["39","43","40","36"], answer:0,
   steps:["aₙ = a + (n−1)d.",
    "a₁₀ = 3 + 9×4 = 3 + 36 = 39.",
    "GP nth term: a·r^(n−1) — different formula, don't mix."],
   ans:"39 (option A)", tip:"AP: aₙ = a+(n−1)d, Sₙ = n/2[2a+(n−1)d]. GP: aₙ = ar^(n−1), Sₙ = a(rⁿ−1)/(r−1). AGP: split or use the standard sum."},
  {type:"imp", q:"If A, G, H are the AM, GM, HM of two positive numbers, then A × H =",
   options:["G²","2G","H²","A²"], answer:0,
   steps:["A = (a+b)/2, G = √(ab), H = 2ab/(a+b).",
    "A × H = (a+b)/2 × 2ab/(a+b) = ab = G².",
    "Also A ≥ G ≥ H with equality iff a = b."],
   ans:"G² (option A)", tip:"AH = G² is a 2-second PYQ. And AM ≥ GM ≥ HM — use for max/min inequality problems."}
  ]
},
{
  name: "7. Limit, Continuity & Differentiability",
  qs: [
  {type:"pyq", year:"JEE Main 2020", q:"lim(x→0) sin(x)/x equals:",
   options:["1","0","∞","does not exist"], answer:0,
   steps:["Standard limit: sin(x)/x → 1 as x → 0 (x in radians!).",
    "Companions: tan(x)/x → 1, (1 − cos x)/x² → ½, (eˣ−1)/x → 1, ln(1+x)/x → 1.",
    "So the answer is 1."],
   ans:"1 (option A)", tip:"Five standard limits answer 80% of limit PYQs: sinx/x, (1−cosx)/x², (eˣ−1)/x, ln(1+x)/x, ((1+x)ⁿ−1)/x. Memorise all five."},
  {type:"imp", q:"d/dx [sin(3x²)] equals:",
   options:["6x·cos(3x²)","cos(3x²)","3x²·cos(3x²)","6x·sin(3x²)"], answer:0,
   steps:["Chain rule: outer derivative × inner derivative.",
    "Outer: d/dθ[sinθ] = cosθ with θ = 3x².",
    "Inner: d/dx[3x²] = 6x.",
    "Result: 6x·cos(3x²)."],
   ans:"6x·cos(3x²) (option A)", tip:"Chain rule = 'peel the onion'. d/dx of f(g(x)) = f'(g)·g'. Implicit: differentiate both sides, remember y' appears when differentiating y terms."},
  {type:"imp", q:"f(x) = |x| at x = 0 is:",
   options:["continuous but not differentiable","continuous and differentiable","discontinuous","differentiable but not continuous"], answer:0,
   steps:["Continuity: lim(x→0) |x| = 0 = f(0) ✓",
    "Differentiability: left derivative = −1, right derivative = +1 → not equal → NOT differentiable.",
    "Corner points always break differentiability, never continuity."],
   ans:"Continuous, not differentiable (option A)", tip:"Corners (|x|), cusps (x^(2/3)) and vertical tangents kill differentiability. Differentiability ⇒ continuity, but never the reverse."}
  ]
},
{
  name: "8. Integral Calculus",
  qs: [
  {type:"pyq", year:"JEE Main 2021", q:"∫ from 0 to 1 of x² dx equals:",
   options:["1/3","1/2","1","2/3"], answer:0,
   steps:["Antiderivative: x³/3.",
    "Evaluate: (1³ − 0³)/3 = 1/3.",
    "Fundamental theorem: ∫ₐᵇ f = F(b) − F(a)."],
   ans:"1/3 (option A)", tip:"Definite integral = plug limits into the antiderivative. For odd functions over [−a, a] the answer is instantly 0; even functions → double the half."},
  {type:"imp", q:"∫ x·eˣ dx equals:",
   options:["x·eˣ − eˣ + C","x·eˣ + eˣ + C","eˣ + C","x²eˣ/2 + C"], answer:0,
   steps:["Integration by parts: ∫u·v = u·v − ∫u'·v.",
    "Take u = x (gets simpler), dv = eˣ dx.",
    "= x·eˣ − ∫eˣ dx = x·eˣ − eˣ + C."],
   ans:"x·eˣ − eˣ + C (option A)", tip:"By-parts priority: ILATE (Inverse, Log, Algebraic, Trig, Exponential). u = the one that simplifies when differentiated."},
  {type:"imp", q:"∫ dx/(1 + x²) equals:",
   options:["tan⁻¹x + C","ln|1+x²| + C","sin⁻¹x + C","(1+x²)²/2 + C"], answer:0,
   steps:["Standard form: ∫dx/(1+x²) = tan⁻¹x + C.",
    "Siblings: ∫dx/√(1−x²) = sin⁻¹x; ∫dx/(x√(x²−1)) = sec⁻¹x.",
    "Recognise the pattern instead of forcing substitution."],
   ans:"tan⁻¹x + C (option A)", tip:"Three inverse-trig integrals: dx/(1+x²)→tan⁻¹, dx/√(1−x²)→sin⁻¹, dx/√(1+x²)→ln|x+√(1+x²)|."}
  ]
},
{
  name: "9. Differential Equations",
  qs: [
  {type:"pyq", year:"JEE Main 2020", q:"The order and degree of the differential equation (d²y/dx²)³ + dy/dx = 0 are:",
   options:["2 and 3","3 and 2","2 and 2","3 and 3"], answer:0,
   steps:["Order = highest derivative present = 2 (d²y/dx²).",
    "Degree = power of the highest-order derivative = 3.",
    "Degree is defined only when the equation is polynomial in derivatives."],
   ans:"Order 2, degree 3 (option A)", tip:"Order = highest derivative; degree = its power. Radicals/fractions in derivatives must be cleared first for degree to exist."},
  {type:"imp", q:"Solve dy/dx = y (y ≠ 0):",
   options:["y = Ceˣ","y = x² + C","y = Cx","y = eˣ + C"], answer:0,
   steps:["Separable: dy/y = dx.",
    "Integrate: ln y = x + c.",
    "y = Ceˣ (exponential growth).",
    "Check: dy/dx = Ceˣ = y ✓"],
   ans:"y = Ceˣ (option A)", tip:"Variable separable first; homogeneous (dy/dx = f(y/x)) use y = vx; linear (dy/dx + Py = Q) use integrating factor e^∫P dx."}
  ]
}
,
{
  name: "10. Coordinate Geometry",
  qs: [
  {type:"pyq", year:"JEE Main 2021", q:"The slope of a line perpendicular to the line joining (1, 2) and (3, 6) is:",
   options:["−1/2","2","1/2","−2"], answer:0,
   steps:["Slope of given line = (6−2)/(3−1) = 4/2 = 2.",
    "Perpendicular: m₁·m₂ = −1 → m₂ = −1/2.",
    "Parallel lines have equal slopes."],
   ans:"−1/2 (option A)", tip:"m = (y₂−y₁)/(x₂−x₁); perpendicular flips and negates (−1/m). Distance = √(Δx²+Δy²); section formula for ratios."},
  {type:"pyq", year:"JEE Main 2019", q:"The equation of the circle with centre (1, −2) and radius 3 is:",
   options:["x² + y² − 2x + 4y − 4 = 0","x² + y² + 2x − 4y − 4 = 0","x² + y² − 2x − 4y + 4 = 0","x² + y² = 9"], answer:0,
   steps:["Standard form: (x−1)² + (y+2)² = 9.",
    "Expand: x² − 2x + 1 + y² + 4y + 4 = 9.",
    "x² + y² − 2x + 4y − 4 = 0.",
    "General circle: x²+y²+2gx+2fy+c = 0 → centre (−g,−f), r = √(g²+f²−c)."],
   ans:"x² + y² − 2x + 4y − 4 = 0 (option A)", tip:"Centre = (−g, −f): halve and negate the x,y coefficients of the general equation."},
  {type:"imp", q:"The focus of the parabola y² = 8x is:",
   options:["(2, 0)","(0, 2)","(4, 0)","(8, 0)"], answer:0,
   steps:["Compare with y² = 4ax → 4a = 8 → a = 2.",
    "Focus = (a, 0) = (2, 0); directrix x = −2; latus rectum = 4a = 8.",
    "Positive x-form → opens right."],
   ans:"(2, 0) (option A)", tip:"y² = 4ax: focus (a,0), LR = 4a. Convert any conic to standard form first — then every parameter is readable."}
  ]
},
{
  name: "11. 3D Geometry",
  qs: [
  {type:"pyq", year:"JEE Main 2020", q:"If a line makes angles 90°, 60°, θ with the x, y, z axes respectively, then cos²θ =",
   options:["1/4","1/2","3/4","1"], answer:0,
   steps:["Direction cosines satisfy l² + m² + n² = 1.",
    "l = cos90° = 0; m = cos60° = 1/2.",
    "0 + 1/4 + n² = 1 → n² = 3/4.",
    "So cos²θ = 3/4 (θ = 30°)."],
   ans:"3/4 (option A)", tip:"l² + m² + n² = 1 — the master identity of direction cosines. Every 'angle with axes' PYQ is this one line."},
  {type:"imp", q:"The shortest distance between two SKEW lines is measured along:",
   options:["their common perpendicular","the x-axis","either line","the line joining any two points"], answer:0,
   steps:["Skew lines are neither parallel nor intersecting.",
    "The unique common perpendicular gives the shortest distance.",
    "SD = |(a₂−a₁)·(b₁×b₂)| / |b₁×b₂|.",
    "Parallel lines: use point-to-line distance instead."],
   ans:"Their common perpendicular (option A)", tip:"Skew → cross-product formula; parallel → point-to-line; intersecting → SD = 0 (verify with (a₂−a₁)·(b₁×b₂) = 0)."}
  ]
},
{
  name: "12. Vector Algebra",
  qs: [
  {type:"pyq", year:"JEE Main 2021", q:"If a·b = 0 for non-zero vectors a and b, then a and b are:",
   options:["perpendicular","parallel","antiparallel","equal"], answer:0,
   steps:["a·b = |a||b|cosθ.",
    "Zero product with non-zero magnitudes → cosθ = 0 → θ = 90°.",
    "a×b = 0 would instead mean parallel (θ = 0° or 180°)."],
   ans:"Perpendicular (option A)", tip:"Dot = 0 → ⊥; cross = 0 → ∥. Dot is a scalar, cross is a vector — don't confuse their zeros."},
  {type:"imp", q:"The projection of vector a = 2i + 3j on b = i + j is:",
   options:["5/√2","√2/2","5","1/√2"], answer:0,
   steps:["Projection of a on b = (a·b)/|b|.",
    "a·b = 2×1 + 3×1 = 5.",
    "|b| = √2.",
    "Projection = 5/√2."],
   ans:"5/√2 (option A)", tip:"Projection = (a·b)/|b| — a scalar length. Vector projection = that scalar × unit vector of b."},
  {type:"imp", q:"The area of the parallelogram with adjacent sides a and b is:",
   options:["|a × b|","a · b","|a||b|","|a + b|"], answer:0,
   steps:["Area = |a × b| (magnitude of the cross product).",
    "Triangle with sides a, b → ½|a × b|.",
    "Scalar triple product |[a b c]| = volume of the parallelepiped."],
   ans:"|a × b| (option A)", tip:"Area → cross; volume → scalar triple product (a 3×3 determinant). Cross product also yields a vector ⊥ to both."}
  ]
}
,
{
  name: "13. Statistics & Probability",
  qs: [
  {type:"pyq", year:"JEE Main 2020", q:"The mean of 2, 4, 6, 8, 10 is:",
   options:["6","5","7","8"], answer:0,
   steps:["Mean = sum/count = 30/5 = 6.",
    "AP data shortcut: mean = (first + last)/2 = (2+10)/2 = 6 ✓",
    "Median here is also 6 (middle of sorted data)."],
   ans:"6 (option A)", tip:"AP data → mean = (first+last)/2. Variance = Σx²/n − (mean)²; SD = √variance. SD is unchanged if you ADD a constant to all data."},
  {type:"imp", q:"Two fair dice are thrown. P(sum = 8) is:",
   options:["5/36","1/6","1/9","7/36"], answer:0,
   steps:["Total outcomes = 36.",
    "Favourable: (2,6),(3,5),(4,4),(5,3),(6,2) → 5 outcomes.",
    "P = 5/36.",
    "Sum 7 is most likely (6/36); 2 and 12 least (1/36)."],
   ans:"5/36 (option A)", tip:"Dice-sum ways: 7→6, 6&8→5, 5&9→4, 4&10→3, 3&11→2, 2&12→1 (out of 36). Memorise once, reuse forever."},
  {type:"imp", q:"If A and B are independent events with P(A) = 0.5, P(B) = 0.4, then P(A ∩ B) =",
   options:["0.2","0.9","0.1","0.5"], answer:0,
   steps:["Independence → P(A∩B) = P(A)·P(B) = 0.5 × 0.4 = 0.2.",
    "Mutual EXCLUSIVITY is different: then P(A∩B) = 0 and P(A∪B) = P(A)+P(B).",
    "Conditional: P(A|B) = P(A∩B)/P(B) = 0.2/0.4 = 0.5 (= P(A), confirming independence)."],
   ans:"0.2 (option A)", tip:"Independent → multiply; exclusive → add (can't be both unless one event is impossible). Bayes: P(A|B) = P(B|A)P(A)/P(B)."},
  {type:"imp", q:"In a binomial distribution B(n, p), the mean and variance are:",
   options:["np and npq","np and np","nq and np","npq and np"], answer:0,
   steps:["Mean = np; variance = npq where q = 1 − p.",
    "Since q < 1, variance < mean ALWAYS — quick validity check.",
    "Standard deviation = √(npq)."],
   ans:"np and npq (option A)", tip:"Binomial: mean np, variance npq. Poisson limit: mean = variance = λ. Use 'variance < mean' to eliminate wrong options."}
  ]
},
{
  name: "14. Trigonometry",
  qs: [
  {type:"pyq", year:"JEE Main 2019", q:"sin²θ + cos²θ equals:",
   options:["1","0","2sinθcosθ","tan²θ"], answer:0,
   steps:["Fundamental identity: sin²θ + cos²θ = 1.",
    "Siblings: 1 + tan²θ = sec²θ, 1 + cot²θ = cosec²θ.",
    "sin2θ = 2sinθcosθ is a DIFFERENT identity (option C trap)."],
   ans:"1 (option A)", tip:"Pythagorean trio: sin²+cos²=1, 1+tan²=sec², 1+cot²=cosec². Doubles: sin2θ = 2sc; cos2θ = 1−2s² = 2c²−1 = c²−s²."},
  {type:"imp", q:"tan⁻¹(1) + tan⁻¹(√3) equals:",
   options:["7π/12","π/2","π","π/3"], answer:0,
   steps:["tan⁻¹(1) = π/4; tan⁻¹(√3) = π/3 (both in principal range).",
    "Sum = π/4 + π/3 = (3π+4π)/12 = 7π/12.",
    "Formula check: tan⁻¹a + tan⁻¹b = tan⁻¹((a+b)/(1−ab)) only when ab < 1 — here ab = √3 > 1, so handle carefully; the direct angle sum 7π/12 is correct."],
   ans:"7π/12 (option A)", tip:"Principal ranges: sin⁻¹, tan⁻¹ ∈ [−π/2, π/2]; cos⁻¹ ∈ [0, π]. For tan⁻¹a + tan⁻¹b with ab > 1, add π to the formula result (positive case)."},
  {type:"imp", q:"The maximum value of 3sinθ + 4cosθ is:",
   options:["5","7","1","4"], answer:0,
   steps:["a·sinθ + b·cosθ has amplitude √(a² + b²).",
    "= √(9 + 16) = 5 (the 3-4-5 triple).",
    "Minimum is −5; maximum occurs at tanθ = a/b = 3/4."],
   ans:"5 (option A)", tip:"Max of a·sinθ + b·cosθ = √(a²+b²). Other common ones: sinθ±cosθ → ±√2; sinθ+√3cosθ → ±2."}
  ]
}
];



