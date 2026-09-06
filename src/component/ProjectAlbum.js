import React from 'react';
import styles from '../style/mystyle.module.css';

function ProjectAlbum({ photos }) {
  const rowSize = Math.ceil(photos.length / 3);
  const rows = Array.from({ length: 3 }, (_, rowIndex) =>
    photos.slice(rowIndex * rowSize, (rowIndex + 1) * rowSize)
  );

  return (
    <div className={styles.albumWrap}>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.albumTrackWrap}>
          <div className={`${styles.albumTrack} ${rowIndex % 2 === 1 ? styles.albumTrackRtl : ''}`}>
            {[row, row].map((photoRow, copyIndex) => (
              <div key={copyIndex} className={styles.albumTrackInner}>
                {photoRow.map((photo, photoIndex) => (
                  <div key={photoIndex} className={styles.albumItem}>
                    <div className={styles.albumItemInner}>
                      <img
                        src={photo.src}
                        alt={`Project ${rowIndex * rowSize + photoIndex + 1}`}
                        className={styles.albumImg}
                      />
                      <div className={styles.albumOverlay}>
                        <span className={styles.albumOverlayIcon}>+</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectAlbum;
