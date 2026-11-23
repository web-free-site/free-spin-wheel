"use client";

interface PresetChipsProps {
  onApply: (text: string) => void;
  disabled?: boolean;
}

const PRESETS = [
  {
    label: "Wheel of names",
    text: "Alex\nJordan\nSam\nTaylor\nRiley\nCasey",
  },
  {
    label: "Yes or no",
    text: "Yes\nNo",
  },
];

export function PresetChips({ onApply, disabled }: PresetChipsProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      <span className="text-sm text-gray-500 self-center">Quick presets:</span>
      {PRESETS.map((preset) => (
        <button
          key={preset.label}
          type="button"
          disabled={disabled}
          onClick={() => onApply(preset.text)}
          className="text-sm px-3 py-1.5 rounded-lg border border-purple-200 bg-purple-50 text-purple-800 hover:bg-purple-100 disabled:opacity-50"
        >
          {preset.label}
        </button>
      ))}
    </div>
  );
}