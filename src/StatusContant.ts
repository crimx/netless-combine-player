export enum AtomPlayerStatus {
    PauseSeeking,
    Pause,
    PauseBuffering,
    PlayingBuffering,
    Playing,
    PlayingSeeking,
    Ended,
}

export enum CombinePlayerStatus {
    PauseSeeking = "PauseSeeking",
    PlayingSeeking = "PlayingSeeking",
    PauseBuffering = "PauseBuffering",
    PlayingBuffering = "PlayingBuffering",
    ToPlay = "ToPlay",
    ToPause = "ToPause",
    Pause = "Pause",
    Playing = "Playing",
    Disabled = "Disabled",
    Ended = "Ended",
}

export enum PublicCombinedStatus {
    PauseSeeking = CombinePlayerStatus.PauseSeeking,
    PlayingSeeking = CombinePlayerStatus.PlayingSeeking,
    Pause = CombinePlayerStatus.Pause,
    PauseBuffering = CombinePlayerStatus.PauseBuffering,
    PlayingBuffering = CombinePlayerStatus.PlayingBuffering,
    Playing = CombinePlayerStatus.Playing,
    Ended = CombinePlayerStatus.Ended,
    Disabled = CombinePlayerStatus.Disabled,
}

export enum AtomPlayerSource {
    Video,
    Whiteboard,
}

export enum TriggerSource {
    None,
    Video,
    Whiteboard,
    Plugin,
}

export enum VideoReadyState {
    HAVE_NOTHING,
    HAVE_METADATA,
    HAVE_CURRENT_DATA,
    HAVE_FUTURE_DATA,
    HAVE_ENOUGH_DATA,
}
