package model

import "time"

type Record struct {
	ID        uint       `json:"id" gorm:"primaryKey"`
	CreatedAt time.Time  `json:"-" gorm:"not null"`
	UpdatedAt time.Time  `json:"-" gorm:"not null"`
	StartedAt time.Time  `json:"startedAt" gorm:"not null"`
	EndedAt   *time.Time `json:"endedAt"`
	Note      string     `json:"note" gorm:"not null;default:''"`
	WorkTime  int        `json:"workTime" gorm:"not null;default:0"`
	JobID     uint       `json:"jobId" gorm:"not null;constraint:OnDelete:CASCADE"`
}
