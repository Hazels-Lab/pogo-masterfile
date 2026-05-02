package main

import (
	"context"
	"fmt"
	"log"

	masterfileapi "github.com/Hazels-Lab/pogo-masterfile-types/packages/go-api"
	"github.com/Hazels-Lab/pogo-masterfile-types/packages/go/move_settings"
)

func main() {
	mf, err := masterfileapi.LoadRemote(context.Background())
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("loaded %d entries (%d moves)\n", mf.Len(), mf.MoveSettings.Len())

	move, ok := mf.MoveSettings.Get(move_settings.MoveSettingsTemplateIDV0013MoveWrap)
	if ok {
		fmt.Printf("Wrap: power = %v\n", move.Data.MoveSettings.Power)
	}
}
