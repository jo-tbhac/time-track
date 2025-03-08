package handler

import (
	"time-track/backend/model"
	"time-track/backend/repository"
)

type RecordHandler struct {
	repository repository.RecordRepository
}

func NewRecordHandler(r repository.RecordRepository) RecordHandler {
	return RecordHandler{repository: r}
}

func (h RecordHandler) CreateRecord(p model.CreateRecordParams) model.Record {
	record, _ := h.repository.Create(p)
	return record
}

func (h RecordHandler) UpdateRecord(p model.UpdateRecordParams) model.Record {
	record, _ := h.repository.Update(p)
	return record
}

func (h RecordHandler) FindRecords() []model.Record {
	records := h.repository.FindAll()
	return records
}
