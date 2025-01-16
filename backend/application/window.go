package application

import (
	"encoding/json"
	"log"
	"os"
)

type windowSize struct {
	Height int `json:"height"`
	Width  int `json:"width"`
	X      int `json:"x"`
	Y      int `json:"y"`
}

func SaveWindowState(height, width, x, y int, path string) {
	ws := windowSize{height, width, x, y}
	json, _ := json.Marshal(ws)
	if err := os.WriteFile(path, json, 0644); err != nil {
		log.Printf("Fail to write file of window state: %v\n", err.Error())
	}
}

func ReadWindowState(path string) (height, width, x, y int) {
	raw, err := os.ReadFile(path)
	if err != nil {
		log.Printf("Fail to read file of window state: %v\n", err.Error())
	}

	var ws windowSize

	json.Unmarshal(raw, &ws)

	return ws.Height, ws.Width, ws.X, ws.Y
}
