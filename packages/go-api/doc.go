// Package masterfileapi provides a runtime API for the Pokémon GO masterfile —
// loads, indexes, and queries entries by templateID with per-group typed
// accessors. Built on top of the types module at github.com/Hazels-Lab/pogo-masterfile/packages/go.
//
// # Quick start
//
//	import (
//	    "context"
//	    masterfileapi "github.com/Hazels-Lab/pogo-masterfile/packages/go-api"
//	    "github.com/Hazels-Lab/pogo-masterfile/packages/go/move_settings"
//	)
//
//	mf, err := masterfileapi.LoadRemote(context.Background())
//	if err != nil {
//	    log.Fatal(err)
//	}
//	move, ok := mf.MoveSettings.Get(move_settings.MoveSettingsTemplateIDV0033MoveTackleFast)
//	if ok {
//	    fmt.Println(move.Data.MoveSettings.Power)
//	}
package masterfileapi
