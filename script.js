// Sample Projects Data
const projects = [
  {
    id: 1,
    title: "SUSTAIN.IMPACT",
    cluster: "AI, Data & Digital Sustainability",
    status: "PROTOTYPE",
    description: "TU Berlin had no comparable, quantitative way to measure or show the environmental impact of campus projects.",
    partner: "Dr. Kristina Fajga, Science & Startups"
  },
  {
    id: 2,
    title: "SUSTAIN.CIRCULARITY — TEXTILE",
    cluster: "Circular Economy",
    status: "PRE-PILOT",
    description: "Contaminated institutional textiles had no centralised re-use or material recovery pathways.",
    partner: "Anett Hein & Julia Krzyslak, Zentrale Beschaffung"
  },
  {
    id: 3,
    title: "SUSTAIN.CIRCULARITY — IT",
    cluster: "Circular Economy",
    status: "CONCEPT",
    description: "Old electronics sit unused across the TU while new devices keep getting ordered — a linear waste of money and resources.",
    partner: "Student Initiative"
  },
  {
    id: 4,
    title: "SUSTAIN.MOBILITY",
    cluster: "Mobility & Smart Cities",
    status: "PRE-PROTOTYPE",
    description: "Analyzing campus commuter flows to optimize low-carbon transport infrastructure.",
    partner: "Campus Management"
  },
  {
    id: 5,
    title: "SUSTAIN.PARTX",
    cluster: "People, Society & Wellbeing",
    status: "PRE-PROTOTYPE",
    description: "Fostering inclusive decision-making hubs for student sustainability initiatives.",
    partner: "TU Sustainability Office"
  },
  {
    id: 6,
    title: "SUSTAIN.FOOD",
    cluster: "People, Society & Wellbeing",
    status: "PROTOTYPE",
    description: "Developing regional, seasonal canteen supply loops across campus dining facilities.",
    partner: "Studierendenwerk Berlin"
  }
];

// Determine cluster category type
function getClusterType(clusterName) {
  const enablers = ['AI, Data & Digital Sustainability', 'Sustainable Finance', 'Governance & Leadership'];
  const systems = ['Circular Economy', 'Mobility & Smart Cities', 'Climate & Energy', 'Biodiversity & Food Systems', 'Water & Land Systems'];
  const humans = ['People, Society & Wellbeing', 'Culture & Transformation', 'Education'];

  if (enablers.includes(clusterName)) return 'enabler';
  if (systems.includes(clusterName)) return 'system';
  if (humans.includes(clusterName)) return 'human';
  return 'all';
}

// Render Project Cards
function renderProjects(filter = 'all') {
  const grid = document.getElementById('projectGrid');
  grid.innerHTML = '';

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.cluster === filter);

  filteredProjects.forEach(project => {
    const clusterType = getClusterType(project.cluster);
    const card = document.createElement('div');
    card.className = 'project-card';
    
    card.innerHTML = `
      <div>
        <div class="card-top">
          <span class="tag" data-type="${clusterType}">${project.cluster}</span>
          <span class="status-badge">${project.status}</span>
        </div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.description}</p>
      </div>
      <div class="card-footer">
        <div class="partner-info">Partner: <strong>${project.partner}</strong></div>
        <a href="#" class="card-link">Read the full story →</a>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Initialize Chips Filtering
document.addEventListener('DOMContentLoaded', () => {
  renderProjects('all');

  const chips = document.querySelectorAll('.cluster-chip');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      
      const selectedCluster = chip.getAttribute('data-cluster');
      renderProjects(selectedCluster);
    });
  });
});