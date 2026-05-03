function showTab(id) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + id).classList.add('active');
  if (event && event.currentTarget) event.currentTarget.classList.add('active');
}

function showVerb(type) {
  document.querySelectorAll('.verb-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.verb-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('vp-' + type).classList.add('active');
  if (event && event.currentTarget) event.currentTarget.classList.add('active');
}

function showVerbInst(group, verbId, btn) {
  const panel = document.getElementById('vp-' + group);
  panel.querySelectorAll('.verb-instance').forEach(p => p.classList.remove('active'));
  panel.querySelectorAll('.vsel-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('vi-' + group + '-' + verbId).classList.add('active');
  btn.classList.add('active');
}

function showTense(verb, tense) {
  const panel = document.getElementById(verb + '-' + tense);
  if (!panel) return;
  const instance = panel.closest('.verb-instance') || panel.closest('.card');
  if (instance) {
    instance.querySelectorAll('.tense-panel').forEach(p => p.classList.remove('active'));
    instance.querySelectorAll('.tense-btn').forEach(b => b.classList.remove('active'));
  }
  panel.classList.add('active');
  if (event && event.currentTarget) event.currentTarget.classList.add('active');
}
