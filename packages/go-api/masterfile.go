package masterfileapi

import (
	masterfile "github.com/PLACEHOLDER/pogo-masterfile-types/packages/go"
)

// FromEntries wraps a pre-parsed slice of MasterfileEntry values, building the
// per-templateID lookup index and per-group accessors.
func FromEntries(entries []masterfile.MasterfileEntry) *Masterfile {
	return newMasterfile(entries)
}

// Load parses a JSON byte slice and constructs a Masterfile. Returns *ParseError
// on JSON failures.
func Load(jsonBytes []byte) (*Masterfile, error) {
	entries, err := masterfile.ParseMasterfile(jsonBytes)
	if err != nil {
		return nil, &ParseError{Err: err}
	}
	return FromEntries(entries), nil
}

// GetEntry returns the entry registered under id (the wide MasterfileEntry
// interface). The second return is false if no entry has that templateID.
func (m *Masterfile) GetEntry(id string) (masterfile.MasterfileEntry, bool) {
	idx, ok := m.byID[id]
	if !ok {
		return nil, false
	}
	return m.entries[idx], true
}

// Has reports whether an entry exists for id.
func (m *Masterfile) Has(id string) bool {
	_, ok := m.byID[id]
	return ok
}

// Entries returns the underlying slice of entries (zero-copy view; do not
// mutate). Order matches the source JSON.
func (m *Masterfile) Entries() []masterfile.MasterfileEntry {
	return m.entries
}

// TemplateIDs returns every templateID in source order.
func (m *Masterfile) TemplateIDs() []string {
	ids := make([]string, 0, len(m.entries))
	idxByPos := make(map[int]string, len(m.byID))
	for id, i := range m.byID {
		idxByPos[i] = id
	}
	for i := range m.entries {
		if id, ok := idxByPos[i]; ok {
			ids = append(ids, id)
		}
	}
	return ids
}

// Len returns the number of entries.
func (m *Masterfile) Len() int {
	return len(m.entries)
}

// Groups returns every per-group discriminator name in canonical order. After
// codegen runs this returns the full set; pre-codegen the stub returns an
// empty slice.
func (m *Masterfile) Groups() []string {
	return GroupNames
}
