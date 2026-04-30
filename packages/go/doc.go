// Package masterfile provides generated Go type definitions for the Pokémon GO
// masterfile, plus a typed entry-point parser.
//
// Each masterfile discriminator gets its own Entry / EntryData / payload type
// triple. ParseMasterfile dispatches each JSON entry to the right concrete type
// by inspecting the inner data object's non-templateId key.
//
// # Quick start
//
//	import (
//	    masterfile "github.com/PLACEHOLDER/pogo-masterfile-types/packages/go"
//	)
//
//	json, _ := os.ReadFile("masterfile.json")
//	entries, err := masterfile.ParseMasterfile(json)
//	if err != nil {
//	    log.Fatal(err)
//	}
//	for _, entry := range entries {
//	    if e, ok := entry.(masterfile.PokemonSettingsEntry); ok {
//	        fmt.Println(e.Data.PokemonSettings.PokemonId)
//	    }
//	}
//
// # Generated structure
//
// Singletons (entries unique by templateId) live alongside the multi-shape
// types in this single package. The MasterfileEntry interface is sealed —
// only the generated concrete types implement it, so a type switch over
// ParseMasterfile's result is exhaustive.
package masterfile
