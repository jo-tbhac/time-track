package model

import "time"

type Job struct {
	ID         uint       `json:"id" gorm:"primaryKey"`
	CreatedAt  time.Time  `json:"-" gorm:"not null"`
	UpdatedAt  time.Time  `json:"-" gorm:"not null"`
	DeletedAt  *time.Time `json:"-"`
	Name       string     `json:"name" gorm:"not null"`
	HourlyWage int        `json:"hourlyWage" gorm:"not null"`
}
