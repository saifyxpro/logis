# Image Generation Prompts for Logis Dubai

These prompts are designed to generate high-quality, photorealistic images that align with Logis Dubai's brand identity: **Global Logistics, Sustainability, Reverse Supply Chain, and Corporate Professionalism.**

**Style Guide:**
*   **Aesthetic:** Clean, modern, cinematic, high-resolution.
*   **Color Palette:** Use the brand colors: Deep Forest Green (#2A3324), Sage Green (#5C715E), Mist White (#E3E7E0). (Note: AI won't use hex codes perfectly, but describe "deep greens, muted sage, clean whites, industrial concrete and steel").
*   **Vibe:** Efficient, massive scale, eco-friendly, professional.
*   **Avoid:** Cartoonish styles, overly cluttered scenes, and any humans/body parts in frame.
*   **Hard Constraint:** No people, no hands, no faces, no silhouettes. Keep all outputs strictly photorealistic.

---

## 1. Hero Section - Main Banner
**Location:** `src/components/sections/Hero.tsx` (Large main image)
**Concept:** The sheer scale of global movement. A massive, modern logistics hub or shipping port at twilight or sunrise, symbolizing new opportunities.

**Prompt:**
> Cinematic wide shot of a massive, ultra-modern logistics distribution center in Dubai at golden hour. Rows of shipping containers organized with precision. In the foreground, a sleek automated conveyor system moving packages. In the background, the subtle silhouette of the Dubai skyline. The lighting is warm and professional, highlighting the scale of operations. Colors: deep greens, metallic silvers, and warm sunlight. No people. Photorealistic, 8k, architectural digest style. --ar 16:9

---

## 2. Hero Section - Small Detail Image
**Location:** `src/components/sections/Hero.tsx` (Small interactive image)
**Concept:** Focus on the "detail" of the process. A close-up of packaging and scanning hardware with sustainable materials.

**Prompt:**
> Close-up macro shot of an automated digital logistics scanner mounted above a recycled cardboard package on a conveyor lane. Soft depth of field (bokeh) in the background showing a blurred warehouse environment. Clean clinical lighting, focus on technology and precision, muted sage-green tones. No people or body parts. Photorealistic, high detail. --ar 4:3

---

## 3. About Section - Supply Chain Optimization
**Location:** `src/components/sections/About.tsx` (Detail image)
**Concept:** The global connection. A map or a symbolic representation of connecting the US to the Middle East/Asia. Or a busy port scene.

**Prompt:**
> Aerial top-down view of a bustling container port with cranes loading ships. The containers are multi-colored but muted/desaturated to fit a corporate aesthetic. The water is deep blue-green. The composition suggests flow and movement from left to right. No people. High-end editorial photography, sharp focus. --ar 16:9

---

## 4. Parallax Section - "Seamless Global Operations"
**Location:** `src/components/sections/ParallaxImage.tsx`
**Concept:** Immersion and scale. Looking down a massive aisle of a high-tech warehouse.

**Prompt:**
> Interior view of a massive, sterile, high-tech warehouse with towering shelves reaching the ceiling. The perspective is symmetrical, leading the eye to a vanishing point in the center. Soft, diffused daylight entering from skylights. Concrete floors with polished reflection. No people, just the infrastructure of commerce. Minimalist, industrial chic. --ar 21:9

---

## 5. Services Section - Home Page Featured Visual
**Location:** `src/components/sections/Services.tsx` (Section background accent or card-support image)
**Concept:** One strong visual that communicates Environmental + Social + Governance in a premium logistics context.

**Prompt (Regenerated - Recommended):**
> High-end editorial photograph inside a modern reverse-logistics hub showing three clear zones in one scene: organized recycled packaging and sorted returns in the foreground (environmental), clearly marked distribution lanes and wayfinding systems in the midground (social impact through access and flow), and visible compliance controls with barcode verification stations and sealed audit bins in the background (governance). Clean industrial architecture, muted green and neutral tones, soft directional daylight, realistic depth, no people. Photorealistic corporate quality. --ar 16:10

---

## 6. About Page - Hero Image
**Location:** `src/app/about/page.tsx`
**File Path:** `public/images/about/about-hero.png`
**Concept:** A premium global-supply-chain visual that communicates large-scale impact.

**Prompt:**
> Ultra wide cinematic image of a modern international container port and distribution corridor at sunrise, with organized shipping containers, cranes in motion, and subtle city skyline in the distance. Atmosphere should feel efficient, clean, and global. No people. Professional editorial style, photorealistic, detailed lighting, high dynamic range. --ar 16:9

## 7. About Page - Operations Image
**Location:** `src/app/about/page.tsx`
**File Path:** `public/images/about/container-operations.png`
**Concept:** Operational control and disciplined inventory handling.

**Prompt:**
> Mid-range industrial photograph of palletized surplus inventory in a large warehouse staging zone, with barcode labels, shrink-wrapped pallets, and clear organization lanes. Emphasis on precision and process quality through infrastructure and layout. No people. Clean corporate color grading, photorealistic. --ar 4:3

## 8. Market Expansion Page - Hero Image
**Location:** `src/app/market-expansion/page.tsx`
**File Path:** `public/images/markets/market-expansion-hero.png`
**Concept:** Cross-border movement and market-entry scale.

**Prompt:**
> Cinematic international shipping scene showing cargo vessels, stacked containers, and intermodal freight movement under warm early morning light. Composition should communicate global reach, export capability, and organized trade flow. No people. Photorealistic, sharp details, modern documentary style. --ar 16:9

## 9. Market Expansion Page - UAE Image
**Location:** `src/app/market-expansion/page.tsx`
**File Path:** `public/images/markets/uae-gateway.png`
**Concept:** UAE as a strategic gateway market.

**Prompt:**
> Aerial shot of a premium logistics and business district in the UAE near a modern port, with highways, warehouses, and skyline elements. Scene should communicate connectivity, commerce, and regional access. No people. Professional, realistic, warm neutral grading. --ar 16:10

## 10. Market Expansion Page - Pakistan Image
**Location:** `src/app/market-expansion/page.tsx`
**File Path:** `public/images/markets/pakistan-market.png`
**Concept:** Growing retail and distribution opportunity in Pakistan.

**Prompt:**
> Realistic logistics-market composite scene in Pakistan featuring active distribution channels, delivery vehicles, and mixed modern-commercial districts. The mood should convey growth potential and dynamic demand. No people. Photorealistic, editorial business photography style. --ar 16:10

## 11. Contact Page - Hero Image
**Location:** `src/app/contact-us/page.tsx`
**File Path:** `public/images/contact/contact-hero.png`
**Concept:** Strategic control center and operational confidence.

**Prompt:**
> Professional operations command center with logistics dashboards, world map data overlays, and active planning workstations in a modern workspace. Scene should feel high-trust, intelligent, and execution-focused. No people visible. Photorealistic corporate style, soft cinematic lighting. --ar 16:9

## 12. Services Page - Hero Image
**Location:** `src/app/services/page.tsx`
**File Path:** `public/images/services/services-hero.jpeg`
**Concept:** Large-scale reverse logistics service execution.

**Prompt:**
> Cinematic wide-angle photograph of a large reverse logistics fulfillment environment with organized return pallets, conveyor zones, and outbound freight preparation. The scene should feel highly controlled, scalable, and modern with clean industrial architecture and soft daylight. No people. Photorealistic business editorial style. --ar 16:9

## 13. Services Page - Surplus Recovery Image
**Location:** `src/app/services/page.tsx`
**File Path:** `public/images/services/recovery-operations.jpeg`
**Concept:** Hands-on inventory assessment and value recovery.

**Prompt:**
> Professional warehouse operations scene showing returned goods being scanned and sorted through automated checkpoints into graded recovery streams. Include pallets, barcode systems, and clean lane organization. No people. Natural color grading, realistic detail, corporate documentary style. --ar 4:3

## 14. Services Page - Export and Routing Image
**Location:** `src/app/services/page.tsx`
**File Path:** `public/images/services/export-routing.jpeg`
**Concept:** Cross-border routing and intermodal export movement.

**Prompt:**
> High-detail logistics port image with stacked shipping containers, gantry cranes, and container trucks in coordinated movement. Composition should communicate precision export planning and strong global routing connectivity. No people. Photorealistic, crisp textures, modern editorial look. --ar 4:3

## 15. Services Page - Compliance and Protection Image
**Location:** `src/app/services/page.tsx`
**File Path:** `public/images/services/compliance-protection.jpeg`
**Concept:** Controlled compliance workflow and brand-safe handling.

**Prompt:**
> Clean industrial compliance scene featuring sealed inventory zones, secure labeling, and quality-control checkpoints with digital verification devices on fixed stations. Focus on trust, legal control, and process discipline. No people. Realistic lighting, sharp detail, professional corporate photography. --ar 4:3

## 16. Services Page - Operating Model Image
**Location:** `src/app/services/page.tsx`
**File Path:** `public/images/services/operating-model.jpeg`
**Concept:** Data-informed logistics planning and execution.

**Prompt:**
> Modern logistics planning environment with shipment flows displayed on large digital dashboards while warehouse movement is visible in the background. Scene includes empty ergonomic workstations and active screens only. Mood should feel strategic, calm, and execution-focused. No people. Photorealistic, high-end business visual style. --ar 5:4
