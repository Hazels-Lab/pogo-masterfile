package main

import (
	"context"
	"fmt"
	"log"

	masterfileapi "github.com/PLACEHOLDER/pogo-masterfile-types/packages/go-api"
	"github.com/PLACEHOLDER/pogo-masterfile-types/packages/go/move_settings"
)

func main() {
	mf, err := masterfileapi.LoadRemote(context.Background())
	if err != nil {
		log.Fatal(err)
	}

	// Iterate one group with the typed entry — fields autocomplete.
	count := 0
	for _, m := range mf.MoveSettings.All() {
		if m.Data.MoveSettings.Power != nil && *m.Data.MoveSettings.Power > 100 {
			count++
		}
	}
	fmt.Printf("%d moves have power > 100\n", count)

	// Typed-constant lookup.
	if mh, ok := mf.MoveSettings.Get(move_settings.MoveSettingsTemplateIDV0022MoveMegahorn); ok {
		fmt.Printf("Megahorn type: %s\n", mh.Data.MoveSettings.PokemonType)
	}
}
