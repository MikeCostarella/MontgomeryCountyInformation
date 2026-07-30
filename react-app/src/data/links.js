// Montgomery County, Ohio — curated directory of meaningful links.
// Single source of truth for the app. Keep entries verified and current.
// Fields: name, category, subcategory, url, description
// Last reviewed: 2026-07-30
//
// Every URL below was fetched and its content checked against the organization
// it claims to be, and against being in OHIO. Nothing was guessed from a
// naming pattern.
//
// THE AUDITOR'S WEB PRESENCE IS SPLIT, AND HALF OF IT 404s:
//   * www.mcauditor.org serves a working HOMEPAGE whose own menu links 404 —
//     the Auditor's real pages live as PATHS ON THE COUNTY SITE
//     (www.mcohio.org/1063/Tax-Real-Estate, /1207/Treasurer, /1210/Recorder,
//     /631/GIS-Downloads). Deep links here use the mcohio.org paths.
//   * www.mcrealestate.org is the Auditor's iasWorld property search — the
//     deep-link target of this project's parcel map, verified against a live
//     record.
//
// NAME COLLISIONS Ohio makes easy:
//   * OAKWOOD: this county's city of Oakwood (30 Park Ave, Dayton 45419) is
//     not Cuyahoga County's village of Oakwood, nor Paulding County's.
//   * Germantown (city) and German Township are DISTINCT, adjacent.
//   * Miamisburg (city) and Miami Township are distinct; Miami Township also
//     exists in ten other Ohio counties.
//   * Union (city, in the parcel data) is not Union City township or Union
//     Township, Warren County. Riverside here is the Dayton suburb, not the
//     Cincinnati neighborhood. Washington Township exists in ~40 counties;
//     this one administers with Centerville.
//   * Springboro and Carlisle straddle into Warren County; their Montgomery
//     slices appear in the parcel data.
//
// LEFT OUT rather than listed unverified (each refused automated fetching —
// this is the browser-check gap in this file):
//   * Vandalia (vandaliaohio.org — robots timeout)
//   * Riverside (riversideoh.gov — 403 to fetchers, heavily indexed official)
//   * Union, New Lebanon, Farmersville, Phillipsburg, Verona (no
//     fetch-verifiable official sites surfaced; the smallest may have none)
//   * Jefferson, Perry, Clay, Jackson and Wayne Townships (sites unconfirmed;
//     jeffersontownship.net timed out)
//   * Prosecuting Attorney (mcpo.com — rate-limited)
//   * Dayton Public Schools (daytonpublic.com — robots timeout) and the
//     suburban school districts (not yet researched)
//   * Dayton Daily News (expected 403, the metro-daily pattern)
//   * mctreas.org / mcrecorder.org standalone domains (rate-limited; the
//     mcohio.org paths below are the county's own current pages)

export const CATEGORIES = [
  "Government",
  "Education",
  "Health",
  "Business & Economy",
  "Community & Social",
  "Recreation & Tourism",
  "News & Media",
];

// The county Auditor's online parcel/property records portal.
export const AUDITOR_VENDOR = "Montgomery County Auditor Real Estate Search (MCRealEstate)";

export const LINKS = [
  // ---------- Government: county ----------
  { name: "Montgomery County, Ohio", category: "Government", subcategory: "County", url: "https://www.mcohio.org/", description: "Official county portal — 'The Birthplace of Innovation' — at 451 West Third Street in Dayton, under a three-member Board of County Commissioners." },
  { name: "Montgomery County Auditor", category: "Government", subcategory: "Auditor", url: "https://www.mcauditor.org/", description: "Auditor Karl Keith's office; note that most of its content lives as pages on the county site (mcohio.org), where this directory's deeper links point." },
  { name: "Auditor Real Estate Search (MCRealEstate)", category: "Government", subcategory: "Auditor", url: "https://www.mcrealestate.org/", description: "The iasWorld property search behind this project's parcel links, searchable by owner, address and parcel ID — verified against live records." },
  { name: "Auditor Tax & Real Estate", category: "Government", subcategory: "Auditor", url: "https://www.mcohio.org/1063/Tax-Real-Estate", description: "The Auditor's tax and real-estate hub on the county site — appraisals, tax rates, and the weekly GIS data exports this project builds from." },
  { name: "Auditor GIS Downloads", category: "Government", subcategory: "GIS", url: "https://www.mcohio.org/631/GIS-Downloads", description: "Weekly GIS geodatabase exports, MrSID imagery and shapefiles — the county's bulk parcel-data source." },
  { name: "Montgomery County Treasurer", category: "Government", subcategory: "Treasurer", url: "https://www.mcohio.org/1207/Treasurer", description: "Treasurer's office on the county site, which collects property taxes." },
  { name: "Montgomery County Recorder", category: "Government", subcategory: "Recorder", url: "https://www.mcohio.org/1210/Recorder", description: "Recorder's office on the county site, keeping deeds and land records." },
  { name: "Montgomery County Board of Elections", category: "Government", subcategory: "Elections", url: "https://www.montgomery.boe.ohio.gov/", description: "County elections office on Ohio's official board-of-elections domain." },
  { name: "Montgomery County Sheriff", category: "Government", subcategory: "Public Safety", url: "https://www.mcohiosheriff.org/", description: "Sheriff's office at 345 West Second Street in Dayton." },
  { name: "Common Pleas Court, General Division", category: "Government", subcategory: "Courts", url: "https://www.montcourt.oh.gov/", description: "The county's general-division trial court in Dayton." },
  { name: "Montgomery County Engineer", category: "Government", subcategory: "Public Works", url: "https://engineer.mcohio.org/", description: "Engineer's office, whose GIS division publishes the live tax-map parcel fabric this project's map geometry comes from." },
  { name: "Board of Developmental Disabilities Services", category: "Government", subcategory: "County", url: "https://www.mcbdds.org/", description: "MCBDDS, at 8114 North Main Street in Dayton." },
  { name: "Public Health – Dayton & Montgomery County", category: "Government", subcategory: "Health", url: "https://www.phdmc.org/", description: "The combined city-county health district, as listed by the Ohio Department of Health." },
  { name: "Greater Dayton RTA", category: "Government", subcategory: "Transit", url: "https://www.iriderta.org/", description: "The regional transit authority at 4 South Main Street in Dayton." },
  { name: "Miami Valley Regional Planning Commission", category: "Government", subcategory: "Planning", url: "https://www.mvrpc.org/", description: "MVRPC, the regional planning commission and GIS clearinghouse for the Dayton region." },

  // ---------- Government: cities ----------
  { name: "City of Dayton", category: "Government", subcategory: "City", url: "https://www.daytonohio.gov/", description: "County seat and the region's core city; City Hall at 101 West Third Street." },
  { name: "City of Kettering", category: "Government", subcategory: "City", url: "https://www.ketteringoh.org/", description: "The county's second-largest city — 'your 24/7 digital city hall.'" },
  { name: "City of Huber Heights", category: "Government", subcategory: "City", url: "https://www.hhoh.org/", description: "City offices at 6151 Brandt Pike — 'America's largest community of brick homes.'" },
  { name: "City of Centerville", category: "Government", subcategory: "City", url: "https://www.centervilleohio.gov/", description: "City offices at 100 West Spring Valley Road; administered alongside Washington Township." },
  { name: "City of Miamisburg", category: "Government", subcategory: "City", url: "https://www.cityofmiamisburg.com/", description: "Great Miami riverfront city in the county's southwest. Distinct from Miami Township next door." },
  { name: "City of Trotwood", category: "Government", subcategory: "City", url: "https://trotwood.org/", description: "City offices at 3035 Olive Road — 'A City of Growth and Progress.'" },
  { name: "City of West Carrollton", category: "Government", subcategory: "City", url: "https://www.westcarrollton.org/", description: "Civic center at 300 East Central Avenue." },
  { name: "City of Clayton", category: "Government", subcategory: "City", url: "https://www.clayton.oh.us/", description: "Northwestern-suburb city, incorporated with Randolph Township in 1998." },
  { name: "City of Englewood", category: "Government", subcategory: "City", url: "https://www.englewood.oh.us/", description: "Northwestern city at the I-70 crossing of the Stillwater valley." },
  { name: "City of Oakwood", category: "Government", subcategory: "City", url: "https://www.oakwoodohio.gov/", description: "City offices at 30 Park Avenue, just south of Dayton. This is Montgomery County's Oakwood — Ohio has two others." },
  { name: "City of Moraine", category: "Government", subcategory: "City", url: "https://ci.moraine.oh.us/", description: "Industrial city at 4200 Dryden Road on the Great Miami." },
  { name: "City of Brookville", category: "Government", subcategory: "City", url: "https://www.brookvilleohio.com/", description: "City in the county's northwest corner." },
  { name: "City of Germantown", category: "Government", subcategory: "City", url: "https://germantown.oh.us/", description: "Historic city at 1 North Plum Street in the county's southwest. Distinct from the surrounding German Township." },

  // ---------- Government: townships ----------
  { name: "Washington Township", category: "Government", subcategory: "Township", url: "https://www.washingtontwp.org/", description: "The county's largest township, administered with the city of Centerville it surrounds." },
  { name: "Miami Township", category: "Government", subcategory: "Township", url: "https://miamitownship.com/", description: "Southwestern township served by the Miami Valley Fire District; surrounds Miamisburg." },
  { name: "Harrison Township", category: "Government", subcategory: "Township", url: "https://www.harrisontownship.org/", description: "Township offices at 5945 North Dixie Drive, north of Dayton." },
  { name: "Butler Township", category: "Government", subcategory: "Township", url: "https://butlertownship.com/", description: "Government center at 3510 Sudachi Drive, near the Dayton airport." },
  { name: "German Township", category: "Government", subcategory: "Township", url: "https://german-township.org/", description: "Rural township around (and distinct from) the city of Germantown." },

  // ---------- Education ----------
  { name: "University of Dayton", category: "Education", subcategory: "Higher Ed", url: "https://udayton.edu/", description: "Catholic, Marianist research university at 300 College Park." },
  { name: "Wright State University", category: "Education", subcategory: "Higher Ed", url: "https://www.wright.edu/", description: "Public university at 3640 Colonel Glenn Highway, named for Dayton's aviation pioneers." },
  { name: "Sinclair Community College", category: "Education", subcategory: "Higher Ed", url: "https://www.sinclair.edu/", description: "One of the nation's oldest community colleges, at 444 West Third Street downtown." },
  { name: "Dayton Metro Library", category: "Education", subcategory: "Libraries", url: "https://www.daytonmetrolibrary.org/", description: "The county-wide library system, Main Library at 215 East Third Street." },

  // ---------- Health ----------
  { name: "Premier Health", category: "Health", subcategory: "Hospitals", url: "https://www.premierhealth.com/", description: "Southwest Ohio's largest health system, anchored by Miami Valley Hospital in Dayton." },
  { name: "Kettering Health", category: "Health", subcategory: "Hospitals", url: "https://www.ketteringhealth.org/", description: "Faith-based health system headquartered at 3535 Southern Boulevard in Kettering." },
  { name: "Dayton Children's Hospital", category: "Health", subcategory: "Hospitals", url: "https://www.childrensdayton.org/", description: "The region's pediatric hospital, on Valley Street in Dayton." },
  { name: "Dayton VA Medical Center", category: "Health", subcategory: "Hospitals", url: "https://www.va.gov/dayton-health-care/", description: "Veterans care at 4100 West Third Street — one of the nation's original soldiers' homes." },

  // ---------- Business & Economy ----------
  { name: "Dayton Area Chamber of Commerce", category: "Business & Economy", subcategory: "Chambers", url: "https://daytonchamber.org/", description: "Regional chamber at 8 North Main Street, Suite 100 in Dayton." },
  { name: "Dayton Development Coalition", category: "Business & Economy", subcategory: "Development", url: "https://www.daytonregion.com/", description: "The region's economic-development organization and JobsOhio partner." },

  // ---------- Community & Social ----------
  { name: "Dayton History / Carillon Historical Park", category: "Community & Social", subcategory: "Heritage", url: "https://www.daytonhistory.org/", description: "The county's historical society at Carillon Historical Park — 'how Dayton changed the world.'" },

  // ---------- Recreation & Tourism ----------
  { name: "Five Rivers MetroParks", category: "Recreation & Tourism", subcategory: "Parks", url: "https://www.metroparks.org/", description: "The county's park district — 18 parks and 160 miles of the nation's largest paved trail network." },
  { name: "National Museum of the U.S. Air Force", category: "Recreation & Tourism", subcategory: "Attractions", url: "https://www.nationalmuseum.af.mil/", description: "The world's largest military aviation museum, free to visit, at Wright-Patterson AFB — the base straddles the Greene County line, and everyone looks for it here." },
  { name: "Dayton Art Institute", category: "Recreation & Tourism", subcategory: "Arts", url: "https://www.daytonartinstitute.org/", description: "Museum at 456 Belmonte Park North, overlooking downtown Dayton." },
  { name: "Boonshoft Museum of Discovery", category: "Recreation & Tourism", subcategory: "Attractions", url: "https://boonshoft.org/", description: "The Dayton Society of Natural History's children's science museum at 2600 DeWeese Parkway." },
  { name: "Dayton Dragons", category: "Recreation & Tourism", subcategory: "Sports", url: "https://www.mlb.com/milb/dayton", description: "Minor-league baseball at Day Air Ballpark — holders of professional sports' longest sellout streak." },

  // ---------- News & Media ----------
  { name: "WHIO TV 7", category: "News & Media", subcategory: "News", url: "https://www.whio.com/", description: "Dayton's CBS affiliate — news, weather and traffic for the Miami Valley." },
  { name: "WDTN 2 News", category: "News & Media", subcategory: "News", url: "https://www.wdtn.com/", description: "Dayton's NBC affiliate, with Storm Team 2 weather." },
];
