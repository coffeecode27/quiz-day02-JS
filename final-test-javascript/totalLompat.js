function totalLompat(posisi_awal, target_posisi, jarak_satu_lompatan) {
  let totalLompatan = 0;
  while (posisi_awal <= target_posisi) {
    posisi_awal += jarak_satu_lompatan;
    totalLompatan++;
  }
  return totalLompatan;
}

console.log(totalLompat(10, 85, 30)); // Output: 3